---
title: UEFI
---

# UEFI

- .efi 存储在 ESP/EFI System Partition 分区
  - 分区标识 EF
  - 分区格式为 FAT 或 FAT32
- efibootmgr - 管理 efi 变量，控制使用的启动文件
- 参考
  - [Understanding UEFI Secure Boot Chain](https://edk2-docs.gitbook.io/understanding-the-uefi-secure-boot-chain)
  - wikipedia [UEFI](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface)
  - [Alpine and UEFI](https://wiki.alpinelinux.org/wiki/Alpine_and_UEFI)
  - debian [UEFI](https://wiki.debian.org/UEFI)
  - [EFIBootLoaders](https://wiki.ubuntu.com/EFIBootLoaders)
  - ubuntu [UEFI/OVMF](https://wiki.ubuntu.com/UEFI/OVMF)
  - [Howto: QEMU w/ Ubuntu Xenial host + UEFI guest](https://blog.system76.com/post/139138591598/howto-uefi-qemu-guest-on-ubuntu-xenial-host)

:::tip

- 使用 UEFI 建议使用 GRUB Bootloader

:::

## AlpineLinux

**最小 UEFI/GPT 分区**

| mount point | type     | size     |
| ----------- | -------- | -------- |
| /boot, /efi | EFI Boot | 260MiB   |
| /           | root     | 1-32 GiB |
| non         | swap     | 1-2GiB   |

## OVMF

基于 EDK II 用于支持虚拟机 EFI 启动的固件

- OVMF - Open Virtual Machine Firmware
- OVMF/OVMF.fd - x86_64 实际运行的固件
- OVMF/OVMF_CODE.fd
- OVMF/OVMF_VARS.fd
  - “template” used to emulate persistent NVRAM storage
- OVMF/QEMU_EFI.fd - aarch64
- ovmf/bios.bin - 软连接指向 OVMF.fd 或 QEMU_EFI.fd

```bash
# -pflash path/to/OVMF.fd - emulated flash, fully support UEFI variables
# -bios bios.bin - variables will be partially emulated, and non-volatile, variables may lose their contents after a reboot
# -L . - 同 bios
# qemu-system-x86_64 -L .
```

```bash
apk add ovmf
# /usr/share/OVMF/
# /usr/share/ovmf/bios.bin
```

## EFISTUB

- 一种启动方式，将 linux 内核 转为 efi 文件
  - Linux 内核可直接通过 EFI 启动
- Linux 3.3+
- archlinux [EFISTUB](https://wiki.archlinux.org/title/EFISTUB)

# FAQ

## Why UEFI / UEFI vs BIOS

- 相同点
  - 固件接口
- BIOS
  - MBR/Master Boot Record 存储分区
- UEFI
  - GPT/GUID partition table 分区
  - 支持 2TB 存储设备
  - 支持超过 4 个主分区
  - 固件支持使系统启动更快
  - 支持安全启动 - 系统完整性检查
  - 支持网络
  - 支持图形界面

## you need to load the kernel first
注意在这之前的错误

```
error: out of memory
```

可能是在 linux 加载内核时出现，需要增加内存。

QEMU 默认内存启动 alpine lts efi 失败。

```bash
# -accel hvf 会失败
qemu-system-x86_64 -m 2G -bios OVMF/OVMF.fd -hda /dev/rdisk2
```
