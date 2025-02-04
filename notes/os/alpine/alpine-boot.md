---
title: Alpin Boot
---

# Alpin Boot

- 启动顺序
  - POST - 硬件自检
  - BIOS
  - mbr/gpt
  - syslinux/grub - loader
    - sh
  - initramfs-init
    - `/bin/busybox switch_root $sysroot $chart_init "$KOPT_init" $KOPT_init_args`
  - /sbin/init
    - busybox init
      - `/etc/inittab`
  - /sbin/openrc - `/etc/init.d`
    - sysinit
      - devfs dmesg hwdrivers mdev
    - boot
      - bootmisc hostname hwclock loadkmap modules swap sysctl syslog
    - default

## syslinux

### /etc/update-extlinux.conf

```ini
# 覆盖 - 否则写入到 /boot/extlinux.conf.new
overwrite=1
# vesamenu.c32 - serial 不支持
vesa_menu=0

# 默认内核参数
# 例如 cryptroot=UUID=5f68e5dc-3e88-4fa4-ad0b-4f47a0190000 cryptdm=cryptroot
default_kernel_opts="nomodeset quiet rootfstype=ext4"
# 在切换 root 前加载的模块
modules=sd-mod,usb-storage,ext4
# roofs - 默认 blkid -o export /dev/root
root=UUID=58364fae-49ec-0000-0000-16698934f7e2

# 默认内核
default=lts

verbose=0

# 隐藏启动菜单
hidden=1
# 启动等待时间
timeout=3


# 串口号 - 没有则禁用
serial_port=
# serial_baud
# the baudrate for the serial port. Will use 115200 if unset
serial_baud=115200

# xen_opts
# options to hand to xen hypervisor, useful ones are:
#    dom0_mem=256M (give domain-0 environment 256M ram)
xen_opts=dom0_mem=256M

# 复制 /usr/share/syslinux/reboot.c32 到 /boot/ 会生成 reboot 菜单

# 从 /usr/share/syslinux/ 复制 hdt.c32, libgpl.c32, 和 libmenu.c32
# 到 /boot/, 会生成 HDT 菜单

# 安装 /boot/memtest, 且启用了 HDT，则会使用，否则会生成额外的 memtest 菜单

# 密码 - 例如使用 mkpasswd 生成 SHA512 密码
# 设置了密码记得修改该文件权限 600
#
# 设置了密码菜单不能编辑，HDT受密码保护
# 也可以在 /etc/update-extlinux.d/ 配置 "MENU PASSWD"
password=''
```

## mkinitfs

- 默认特性
  - v3.13 - ata base cdrom ext4 keymap kms mmc nvme raid scsi usb virtio
  - v3.12 - ata base ide scsi usb virtio ext4
- [alpinelinux/mkinitfs](https://github.com/alpinelinux/mkinitfs)
  - `mkinitfs -L` - 特性 [features.d](https://github.com/alpinelinux/mkinitfs/tree/master/features.d)
  - `/etc/mkinitfs/mkinitfs.conf` - 配置
- features
  - cryptsetup
    - LUKS
    - `apk add cryptsetup`
    - append `cryptroot=UUID=<UUID>`
- 基础文件
  - /usr/share/mkinitfs
  - /etc/mkinitfs/features.d
- [mkinitfs](https://github.com/alpinelinux/mkinitfs/blob/master/mkinitfs.in)
  - source 配置文件

```bash
# 所有特性
mkinitfs -L

# 自定义特性
apk --root /mnt add dmidecode
chroot /mnt which dmidecode > /mnt/etc/mkinitfs/features.d/dmidecode.files

# 新增特性
# 常见默认值
# features="ata base ide scsi usb virtio ext4"
sed -i -r "s/^(features)=\"([^\"]*)\"/\1=\"\2 dmidecode\"/" /mnt/etc/mkinitfs/mkinitfs.conf

# 查看除内核之外的文件列表
mkinitfs -l -n -c /mnt/etc/mkinitfs/mkinitfs.conf -b /mnt/ $(ls /mnt/lib/modules/)

# chroot 安装
mkinitfs -c /mnt/etc/mkinitfs/mkinitfs.conf -b /mnt/ $(ls /mnt/lib/modules/)

# 不设置 -P 默认使用当前主机的 features.d
# 不设置 -i 默认使用当前主机的 initramfs-init
mkinitfs -P /mnt/etc/mkinitfs/features.d -c /mnt/etc/mkinitfs/mkinitfs.conf -i /mnt/usr/share/mkinitfs/initramfs-init -b /mnt/ $(ls /mnt/lib/modules/)

# zstd -19
# features="ata base ide scsi usb virtio ext4"
# gzip 13M -> 10M - 78%
#
# features="ata base cdrom ext4 keymap kms mmc nvme raid scsi usb virtio"
# gzip 39M -> 23M - 59%
apk add zstd
mkinitfs -C zstd -o /tmp/initramfs-zstd
```

```
usage: mkinitfs [-hkKLln] [-b basedir] [-c configfile] [-F features] [-f fstab]
                [-C initramfs compression] [-i initfile] [-o outfile]
                [-P featuresdir] [-t tempdir] [kernelversion]
options:
  -b  prefix files and kernel modules with basedir
  -c  use configfile instead of /etc/mkinitfs/mkinitfs.conf
  -C  initramfs compression (gzip|xz defaults to gzip)
  -f  use fstab instead of /usr/share/mkinitfs/fstab
  -F  use specified features
  -h  print this help
  -i  use initfile as init instead of /usr/share/mkinitfs/initramfs-init
  -k  keep tempdir
  -K  copy also host keys to initramfs
  -l  only list files that would have been used
  -L  list available features
  -n  don't include kernel modules or firmware
  -o  set another outfile
  -P  prepend features.d search path
  -q  Quiet mode
  -s  Include modloop signature
  -t  use tempdir when creating initramfs image
```

### features

[features.d](https://github.com/alpinelinux/mkinitfs/tree/master/features.d)

| feature    | pkgs        | desc                                                   |
| ---------- | ----------- | ------------------------------------------------------ |
| 9p         |             | virtio-fs-9p<br/>虚拟化直接映射目录                    |
| ata        |             |
| base       |             | busybox,sh,mdev,apk,modprobe.d,mdev.conf,nlplug-findfs |
| bootchart  |             | [bootchart](https://www.bootchart.org/)集成            |
| btrfs      | btrfs-progs | /sbin/btrfs                                            |
| cdrom      |             | driver/cdrom, isofs                                    |
| cramfs     |
| cryptkey   |             | /crypto_keyfile.bin                                    |
| cryptsetup | cryptsetup  | modprobe dm-crypt                                      |
| dasd_mod   |
| dhcp       |             | `/usr/share/udhcpc/default.script`<br/>af_packet       |
| ena        |
| ext2       |
| ext3       |
| ext4       |
| f2fs       |
| floppy     |
| gfs2       |             | Global File System 2                                   |
| https      | ssl_client  | `/usr/bin/ssl_client`                                  |
| jfs        |
| keymap     |
| kms        |             | agp,gpu,i2c,video,fbdev,vc4                            |
| lvm        |
| mmc        |
| nbd        |
| network    |
| nvme       |             | 加载 nvme 驱动 - 例如使用了 M.2 启动                   |
| ocfs2      |
| qeth       |
| raid       |
| reiserfs   |
| scsi       |
| squashfs   |
| ubifs      |
| usb        |             | drivers/usb,drivers/hid,fat,nls                        |
| virtio     |
| xenpci     |
| xfs        | xfsprogs    | `/sbin/xfs_repair`                                     |
| zfcp       |
| zfs        | zfs         |

- fs
  - fat
  - isofs
  - btrfs
  - cramfs
  - ext2,ext3,ext4
  - zfs
  - [gfs2](https://en.wikipedia.org/wiki/GFS2) - Global File System 2
    - 分布式文件系统
  - f2fs
  - [jfs](<https://en.wikipedia.org/wiki/JFS_(file_system)>) - Journaled File System
    - Linux 2.4.18+
    - 使用较少, 性能弱于 ext4, 支持大小写无关
  - reiserfs
  - squashfs
  - [nlsfs](https://en.wikipedia.org/wiki/NILFS) - New Implementation of a Log-structured File System
    - Linux 2.6.30+
  - xfs
- 虚拟化
  - virtio, 9p
  - kms
- 存储驱动
  - cdrom
  - cryptsetup
  - lvm
  - floppy
  - mmc
  - nbd
  - nvme
  - raid
  - usb
- 网络
  - dhcp
  - https
  - network
- 版本特性
  - v3.13 ata base cdrom ext4 keymap kms mmc nvme raid scsi usb virtio
  - v3.12 ata base ide scsi usb virtio ext4

### initramfs

- `/usr/share/mkinitfs/initramfs-init`

* [initramfs-init](https://github.com/alpinelinux/mkinitfs/blob/master/initramfs-init.in)
  - 核心启动逻辑
  - 启动完成后进行 switch root `/bin/busybox switch_root $sysroot $chart_init "$KOPT_init" $KOPT_init_args`
  - 启动方式
    - 有 root
      - 挂载
      - switch_root
    - 无 root
      - apkvol - 尝试构建 root
        - 本地或远程
      - 无盘模式

| opt           | default      | desc                                                                                      |
| ------------- | ------------ | ----------------------------------------------------------------------------------------- |
| BOOTIF        |
| alpine_dev    |
| alpine_repo   | `auto`       | `http://...`                                                                              |
| alpine_start  |
| apkovl        |              | `/tmp/apkovls`                                                                            |
| autodetect    |
| autoraid      |
| blacklist     |              | `/etc/modprobe.d/boot-opt-blacklist.conf`                                                 |
| chart         | no           | `bootchart` logging                                                                       |
| cryptdiscards | no           | `nlplug-findfs -D` - allow discards on crypto device                                      |
| cryptdm       |              | `nlplug-findfs -m` - use CRYPTNAME name for crypto device mapping                         |
| cryptheader   |
| cryptkey      |              | `nlplug-findfs -k ${cryptkey:-/crypto_keyfile.bin}`                                       |
| cryptoffset   |              | `nlplug-findfs -o` - cryptsetup payload offset                                            |
| cryptroot     |              | `nlplug-findfs -c` - run cryptsetup luksOpen when CRYPTDEVICE is found                    |
| dasd          |              | modprobe `dasd_mod dasd_eckd_mod dasd_fba_mod`<br/>`/sys/bus/ccw/devices/${dash}/online`  |
| debug_init    | no           | `set -x`                                                                                  |
| dma           |
| init          | `/sbin/init` |
| init_args     |
| ip            |
| keep_apk_new  |
| modules       |              | `${rootfstype} loop squashfs`                                                             |
| nbd           |
| overlaytmpfs  | no           | mount root ro, tmpfs root rw,                                                             |
| ovl_dev       |              | apkvol - diskless, `/boot/ovl_dev/cache`                                                  |
| pkgs          |
| quiet         | no           | `dmesg -n 1`                                                                              |
| resume        |              | `/sys/power/resume`                                                                       |
| root          |
| root_size     |              | tmpfs sysroot,使用 rootflags `,size=`                                                     |
| rootflags     |              | `ro`                                                                                      |
| rootfstype    |              | `ext4`, `zfs`, `btrfs`                                                                    |
| s390x_net     |              | modprobe `qeth qeth_l2 qeth_l3`                                                           |
| single,s,1    |              | SINGLEMODE<br/>有 root，直接进入 sh，不挂载<br/> 无 root，可能启动网络和挂载设备后进入 sh |
| splash        | yes          | 无 root 时, 默认使用 `/media/*/fbsplash.ppm`,`/media/*/fbsplash$num.ppm`                  |
| ssh_key       |
| usbdelay      |              | `nlplug-findfs -t` delay, second                                                          |

- apkvol
  - `http://xyz/{MAC}/xyz/{UUID}/$(cat /sys/class/dmi/id/product_uuid)`

## inittab

- debian [inittab.5](https://manpages.debian.org/jessie/sysvinit-core/inittab.5.en.html)

```
<id>:<runlevels>:<action>:<process>
```

> busybox 没有 runlevels

- id - 命令终端
- action - 运行条件
- program - 程序

| action       | desc                                                            |
| ------------ | --------------------------------------------------------------- |
| respawn      | 自动重启，例如 getty                                            |
| wait         | runlevel 进入 init 后等待该进程完成                             |
| once         | runlevel 进入 后执行一次                                        |
| boot         | 忽略 runlevel，boot 时执行                                      |
| bootwait     | 忽略 runlevel，boot 时执行，等待 init 完成                      |
| off          | 不做任何事                                                      |
| ondemand     | 按需的 runlevel，调用到 runlevel 时执行，a、b、c runlevel       |
| initdefault  | boot 后进入的默认 init，不存在则询问 runlevel，忽略 process     |
| sysinit      | boot 后进入程序，在 boot 和 botwait 之前执行，忽略 runlevel     |
| powerwait    | 关闭电源时执行，一般用于 USP 通信                               |
| powerfail    | 类似于 powerwait，但不等待完成                                  |
| powerokwait  | init 被告知电源恢复时执行                                       |
| powerfailnow | 告知 init 外部 UPS 没电了                                       |
| ctrlaltdel   | SIGINT 信号，`CTRL-ALT-DEL`，用于重启和关机场景                 |
| kbrequest    | init 处理快捷键组合，需要映射 KeyboardSignal，使用 keymaps 文件 |

默认 AlpineLinux inittab 配置

**/etc/inittab**

```ini
::sysinit:/sbin/openrc sysinit
::sysinit:/sbin/openrc boot
::wait:/sbin/openrc default

# Set up a couple of getty's
tty1::respawn:/sbin/getty 38400 tty1
tty2::respawn:/sbin/getty 38400 tty2
tty3::respawn:/sbin/getty 38400 tty3
tty4::respawn:/sbin/getty 38400 tty4
tty5::respawn:/sbin/getty 38400 tty5
tty6::respawn:/sbin/getty 38400 tty6

# Put a getty on the serial port
#ttyS0::respawn:/sbin/getty -L ttyS0 115200 vt100

# Stuff to do for the 3-finger salute
::ctrlaltdel:/sbin/reboot

# Stuff to do before rebooting
::shutdown:/sbin/openrc shutdown
```

## grub

**/etc/default/grub**

```ini
GRUB_TIMEOUT=2
GRUB_DISABLE_SUBMENU=y
GRUB_DISABLE_RECOVERY=true
GRUB_CMDLINE_LINUX_DEFAULT="modules=sd-mod,usb-storage,ext4 quiet rootfstype=ext4"
```

## apkvol

- alpine [lbu](./alpine-lbu.md)
- Initramfs-init does not respect apkovl device fstab entry
  https://gitlab.alpinelinux.org/alpine/mkinitfs/-/issues/5
- Diskless APKOVL loading dosn't work on btrfs and xfs filesystems, or nvme-based devices
  https://gitlab.alpinelinux.org/alpine/aports/-/issues/11589

# FAQ

## diskless vs data vs sys

- diskless
  - 整个 rootfs `/` 为 tmpfs
    - 系统运行在 tmpfs
    - 不安装任何东西到硬盘上 - 无盘模式=无磁盘
  - 从外部媒体启动 - iso、usb
  - 推荐存储本地 pkg 缓存 - 启动时不需要网络
  - lbu 包含数据 /var
    - 一般的 lbu 只存储 /etc
  - init 参数 `ovl_dev`
- data
  - 分离 系统 和 数据
  - 数据 存储在硬盘上 - /var 分区
- sys - 桌面、虚拟机、服务器
  - 传统安装方式
  - 安装启动分区 - /boot 分区
  - 安装 rootfs 分区 - /
  - swap 可选
- crypt, cryptsys
  - luks -> sys,data
- lvm, lvmsys, lvmdata
  - 使用 LVM 分区
