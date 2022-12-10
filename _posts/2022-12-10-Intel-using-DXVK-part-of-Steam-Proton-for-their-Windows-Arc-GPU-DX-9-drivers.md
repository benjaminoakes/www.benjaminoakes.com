---
layout: post
title: "Intel using DXVK (part of Steam Proton) for their Windows Arc GPU DX 9 drivers"
category: "computing"
date: 2022-12-10
---

>Intel recently announced a big driver update for their Arc GPUs on Windows, because their DirectX 9 performance wasnt as good as it could have been. Turns out, theyre using code from the open source DXVK which is part of Steam Play Proton.
>
> DXVK translates Direct3D 9, Direct3D 10 and Direct3D 11 to Vulkan. Primarily written for Wine, the Windows compatibility layer, which is what Proton is made from (Proton is what the majority of games on Steam Deck run through). However, it also has a Native implementation for Linux and it can be used even on Windows too. So its not a big surprise to see this. Heck, even NVIDIA use DXVK for RTX Remix.

Source: [Intel using DXVK (part of Steam Proton) for their Windows Arc GPU DX 9 drivers - OSnews](https://www.osnews.com/story/135619/intel-using-dxvk-part-of-steam-proton-for-their-windows-arc-gpu-dx-9-drivers/)

Open source benefits everyone.
