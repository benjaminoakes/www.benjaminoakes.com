---
layout: post
title: "QUIC is not Quick Enough over Fast Internet"
category: ""
date: 2024-09-10
---

>QUIC is expected to be a game-changer in improving web application performance. In this paper, we conduct a systematic examination of QUIC's performance over high-speed networks. We find that over fast Internet, the UDP+QUIC+HTTP/3 stack suffers a data rate reduction of up to 45.2% compared to the TCP+TLS+HTTP/2 counterpart. Moreover, the performance gap between QUIC and HTTP/2 grows as the underlying bandwidth increases. We observe this issue on lightweight data transfer clients and major web browsers (Chrome, Edge, Firefox, Opera), on different hosts (desktop, mobile), and over diverse networks (wired broadband, cellular). It affects not only file transfers, but also various applications such as video streaming (up to 9.8% video bitrate reduction) and web browsing. Through rigorous packet trace analysis and kernel- and user-space profiling, we identify the root cause to be high receiver-side processing overhead, in particular, excessive data packets and QUIC's user-space ACKs. We make concrete recommendations for mitigating the observed performance issues

Source: [QUIC is not Quick Enough over Fast Internet - Proceedings of the ACM Web Conference 2024](https://dl.acm.org/doi/10.1145/3589334.3645323)
