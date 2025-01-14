---
title: 常见问题
tags:
  - FAQ
---

# FAQ

## javac 乱码

强制使用 UTF-8

```bash
javac -J-Dfile.encoding=UTF-8
```

## 选择 JUL 类逻辑

```mermaid
graph TD

    Start[选择JUL类] --> KVorV[KV or Value only?]
    KVorV --Value--> Duplicate[是否允许重复?]
    Duplicate --Yes--> Sync[是否线程同步?]
    Duplicate--No-->Ordered[是否有序?]
    Ordered--No-->HasSet
    Ordered--Yes-->ByInsertOrValue[插入排序还是值排序?]
    ByInsertOrValue--Insert-->LinkedHashSet
    ByInsertOrValue--Value-->TreeSet
    Sync--Yes-->LIFO[LIFO堆栈操作?]
    LIFO--Yes-->Stack
    LIFO--No-->Vector
    Sync --No--> RandomAccess[随机访问?]
    RandomAccess--Yes-->ArrayList
    RandomAccess --No--> SeqAccess[顺序访问?]
    SeqAccess --Yes--> LinkedList
    SeqAccess --No--> Queue[队列操作?]
    Queue --No--> ArrayList
    Queue --Yes--> FastQueue[快速队列?]
    FastQueue --No--> LinkedList
    FastQueue --Yes--> ArrayDeque

    KVorV--KV-->EntryOrdered[有序?]
    EntryOrdered--Yes-->EntryOrderedBy[顺序基于?]
    EntryOrderedBy--Insert-->LinkedHashMap
    EntryOrderedBy--Key-->KVSync[线程同步?]
    KVSync--Yes-->HashTable
    KVSync--No-->TreeMap
    EntryOrdered--No-->Cache[作为缓存/Value构建成本高?]
    Cache--Yes-->WeakHashMap
    Cache--No-->Equals[equals/==?]
    Equals--equals-->HashMap
    Equals--==-->IdentityHashMap
```

## Why is generic of a return type erased when there is an unchecked conversion of a method parameter in Java 8?

- [Why is generic of a return type erased when there is an unchecked conversion of a method parameter in Java 8?](https://stackoverflow.com/q/30918308/1870054)

Collection
http://fastutil.di.unimi.it/
http://pcollections.org/
https://github.com/hrldcpr/pcollections

https://mvnrepository.com/artifact/org.eclipse.collections/eclipse-collections
https://github.com/eclipse/eclipse-collections

http://java-performance.info/hashmap-overview-jdk-fastutil-goldman-sachs-hppc-koloboke-trove-january-2015/

https://mvnrepository.com/open-source/collections

```xml
<dependency>
    <groupId>com.carrotsearch</groupId>
    <artifactId>hppc</artifactId>
    <version>0.8.1</version>
</dependency>
```

https://github.com/carrotsearch/hppc

## Proxy performance

https://stackoverflow.com/q/1856242/1870054
