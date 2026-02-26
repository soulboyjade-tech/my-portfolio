import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';

// Banner 视频列表配置
const BANNER_VIDEOS = [
  "https://dcczgdivqxhvskurktet.supabase.co/storage/v1/object/public/my%20-portfolio/works-name/video-banner-01.mp4",
  "https://dcczgdivqxhvskurktet.supabase.co/storage/v1/object/public/my%20-portfolio/works-name/video-banner-02.mp4",
  "https://dcczgdivqxhvskurktet.supabase.co/storage/v1/object/public/my%20-portfolio/works-name/video-banner-03.mp4"
];

// 项目数据配置
const PROJECTS = [
  {
    id: "01",
    title: "落日舞厅",
    subtitle: "SUNSET BALLROOM",
    category: "Documentary / 纪录片",
    year: "2022-2023",
    description: `随着二十一世纪20年代的到来，中国的人口老龄化现象也逐渐显著，老龄化带来的一系列问题引起我对老年人群体的关注。在 2022 年的广州海珠广场天桥下有一群 60 岁以上的中老年男男女女在天桥下跳劲爆的迪斯科舞蹈，他们自带音箱，随着音箱发出的八九十年代香港地区流行的迪斯科舞曲而劲舞。

我作为一个观察者，跟拍其中一位70多岁的男性舞者一年，并制作了这部长达30分钟的纪录片。当我注意这一现象时，我就开始关注中国老年人心理的这一话题，老年人是否也需要社交，是否也需要像年轻人一样发泄自己作为人的欲望。

在东亚社会的语言中，不管是老人还是年轻人，人们都是在白天压抑自己却只在夜晚释放欲望。在我的调查中，这一群只在夜晚偷偷聚集，狂欢过后又回归生活的舞者，就像是对自我情感的欲望的对抗，并在崇尚安分守己的社会中寻求的一丝反叛。

在 2022 年年底，我主要不间断跟拍刘叔两个月，试图通过刘叔来了解这一群体，探讨关于孤独，老年社交，和公共空间的社会议题。`,
    homeTitle: "纪录片",
    previewImg: "https://picui.ogmua.cn/s1/2026/02/25/699f113324c36.webp",
    content: [
      { type: 'video', url: "https://6swydf55qetcfsax.public.blob.vercel-storage.com/%E9%95%BF%E7%89%8720260224.m4v" },
      { type: 'image', url: "https://img.zcool.cn/community/699549cd7a03bqoh5efefb7037.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699549cd53175ri9kr55a61292.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699549ae0e67dr2s4cn7v85967.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699549ae00eb5wthwwyg5l2690.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699549d836c43hluaquluj1882.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" }
    ]
  },
  {
    id: "02",
    title: "婚姻生活",
    subtitle: "MARRIAGE LIFE",
    category: "Narrative / 叙事摄影",
    year: "2024",
    description: "婚姻是什么？这个问题困扰着二十四岁的我。虽然我尚未踏入婚姻，但作为一个旁观者，我目睹了身边人们的婚姻生活。几年前，我见过这样一个场景：夫妻在家中激烈争吵，争吵过后，丈夫却平静地为妻子量血压，日复一日，年复一年。压抑、冲突、克制、无奈……这种日复一日的循环给我留下了深刻的印象。我试图通过影像呈现出婚姻中的隐喻性、平凡而真实的画面，以此寻找关于婚姻的答案。以调研、观察与内容判断作为项目起点我曾采访过素未谋面的陌生人，询问她们对婚姻的看法，她们有的是结婚了，有的是离婚了，更有的人选择逃婚。关于婚姻，它们各自有着各自的看法。在与他们接触的同时，我按下了快门，记录了他们当下的状态。",
    homeTitle: "摄影项目",
    previewImg: "https://img.zcool.cn/community/69954609620804eqx000mg7955.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp",
    content: [
      { type: 'image', url: "https://img.zcool.cn/community/69954609620804eqx000mg7955.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/69954609714f85hd7i4sd71546.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699546095e0d8ib1lnpa7x2645.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699546095fee5b1ifswgzw5290.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/6995460971fcfkmo080aon6513.JPG?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/6995460960436fzc632otj9490.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/6995460974a80899z9zoi33260.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699546095e8490ay66dx4c405.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" }
    ]
  },
  {
    id: "03",
    title: "东施效颦",
    subtitle: "DONG SHI XIAO PIN",
    category: "Documentary / 纪实摄影",
    year: "2024",
    description: "那段时间，我正在准备我的作品集。潮湿的广州夏天，我独自一人抱着借来的徕卡相机走在岛上的湿地里。瞎按着快门，现在回想起来看看当时的还是学生的自己，其实胸中无墨，不过是东施效颦，故作深沉。",
    homeTitle: "纪实摄影",
    previewImg: "https://img.zcool.cn/community/69992f22829c5nj0xllz3v5479.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp",
    content: [
      { type: 'image', url: "https://img.zcool.cn/community/69992f22829c5nj0xllz3v5479.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/69992f228295eqddokfgbc9421.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/69992f229948fg8upp9bil2709.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/69992f22998c5imujx7d685832.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/69992f2282f24id22mvbs25082.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/69992f229ac28w2ctwu0dc5461.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/69992f22813d4bjs666pmp9455.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/69992f2280132pg7pul7xd7764.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/69992f22b4a005qfzburax7665.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'video', url: "https://r4---sn-i3b7kn6k.googlevideo.com/videoplayback?expire=1772030572&ei=DLaeaY-6CaDjxN8PpPm98Qc&ip=176.6.152.247&id=o-ANvBrI3GlcdzXjca5KBbq_x5mStcDvisMdsKSYD2mXdi&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&pcm2=yes&bui=AVNa5-yr-hINeLhInUBm0_1Tt8wXRUvaHYzyYktlv3X0gOskQcX_n4QUVSnltaTftbgUCbrKFYSsymdr&spc=6dlaFKvWbyTDnCz_D6jB&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&cnr=14&ratebypass=yes&dur=80.967&lmt=1759338532473569&fexp=51552689%2C51565116%2C51565682%2C51580968%2C51791333&c=ANDROID_VR&txp=6208224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cpcm2%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJEij0EwRQIhAL0td877ta37GV6BWmTwhEOQRGYb9VwxhmAVI6lZLTreAiBsIszr5d9c4q-QFNlxBguqsanEFG4RO9qUfwpENh9WyQ%3D%3D&pot=MnbKspUco-hIlMqM9KO_t3GUwMe2KfUFm1DGiUrfBfLmQhvRmQjasS-9JUVFxU35zHJnFpcW0KG47_eYba1CX-HAj5xNYf2905_OjbTojXuGdDNkpBTQijEwpciPIzsy6hQqMi0XpUKrknkG-AknogzEfZpBTzeo&cms_redirect=yes&cps=189&met=1772008976,&mh=wJ&mip=89.251.11.21&mm=31&mn=sn-i3b7kn6k&ms=au&mt=1772008616&mv=m&mvi=4&pl=24&lsparams=cps,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRQIgQQZepGrnX3quD24YdIY8OZpydkofII6e3CKJwsDYM-4CIQDljkIZGgpEcVup5AtsCX52GflIo2lzlsGFi9Chfc4pWA%3D%3D" }
    ]
  },
  {
    id: "04",
    title: "自媒体频道",
    subtitle: "VLOG & CHANNEL",
    category: "Social Media / 自媒体",
    year: "2023-2024",
    description: "身为一位业界的影像工作者，同时却也是自媒体的创作者。对影像抱有热情，喜欢捕捉美丽的画面，或是，记录那些生命中特别的 moment，这些都是我喜欢记录和创作的理由。",
    homeTitle: "自媒体频道",
    previewImg: "https://picui.ogmua.cn/s1/2026/02/26/699f21c8ac7d5.webp",
    content: [
      { type: 'image', url: "https://picui.ogmua.cn/s1/2026/02/24/699dbd73e4433.webp" },
      { type: 'image', url: "https://img.zcool.cn/community/69949dc1a7cbf1xwuo8mxf3001.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'video', url: "https://xebbj574h837wcry.public.blob.vercel-storage.com/%E6%B8%85%E8%BF%88%E5%B0%8F%E7%BA%A2%E4%B9%A6%E7%89%88%E6%9C%AC.mp4" },
      { type: 'image', url: "https://img.zcool.cn/community/6999f7d005681uy60x7wwf6653.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'video', url: "https://6swydf55qetcfsax.public.blob.vercel-storage.com/1%E6%9C%8818%E6%97%A5%285%29.MP4" },
      { type: 'image', url: "https://img.zcool.cn/community/699c8fb25ba42mzmb2lz0x1978.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'video', url: "https://dcczgdivqxhvskurktet.supabase.co/storage/v1/object/public/my%20-portfolio/works-name/video-banner-01.mp4" }
    ]
  },
  {
    id: "05",
    title: "银河",
    subtitle: "THE GALAXY",
    category: "Landscape / 风光摄影",
    year: "2023",
    description: "攝影自出版，图片摄于2022年。",
    homeTitle: "摄影书",
    previewImg: "https://img.zcool.cn/community/699c90dc7ee0cxlyq8a3un1074.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp",
    content: [
      { type: 'image', url: "https://img.zcool.cn/community/699c90dc7ee0cxlyq8a3un1074.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699c90dc7120d5lzthss7v9877.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699c90dc6c8eetbywhbg588449.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" }
    ]
  },
  {
    id: "06",
    title: "平面摄影",
    subtitle: "STILL PHOTOGRAPHY",
    category: "Commercial / 商业摄影",
    year: "2022-2024",
    description: "商业平面摄影作品",
    homeTitle: "平面摄影",
    previewImg: "https://picui.ogmua.cn/s1/2026/02/26/699fe93434d39.webp",
    content: [
      { type: 'image', url: "https://img.zcool.cn/community/699c936bd69a6n6w65vrtg4010.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699934535ed32qj4e2n30q4721.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699934536a03bsjrbj0m7e7662.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699c931b69ee6x8iquuxof554.jpeg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699935ab17fb3ep9i9pcui4417.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/6999345354e9c79ztg509y2252.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/69993453726b6i7djomdpw3182.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699934534670964j6v315j2302.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'image', url: "https://img.zcool.cn/community/699c931b6b8a1140ksh0tm5397.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" }
    ]
  },
  {
    id: "07",
    title: "产品摄影",
    subtitle: "PRODUCT",
    category: "Commercial / 产品摄影",
    year: "2023-2024",
    description: "静物与产品摄影",
    homeTitle: "静物摄影",
    previewImg: "https://img.zcool.cn/community/69994d8451e35ezigo22w07368.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp",
    content: [
       { type: 'image', url: "https://img.zcool.cn/community/6999368dd6fa9x8ta9qb2b4476.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
       { type: 'image', url: "https://img.zcool.cn/community/6999368dd52f0nwwni17tv2523.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
       { type: 'image', url: "https://img.zcool.cn/community/699936d0eb80632k85kyiw3768.jpeg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
       { type: 'image', url: "https://img.zcool.cn/community/69994d8451e35ezigo22w07368.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
       { type: 'image', url: "https://img.zcool.cn/community/699939b273ba5pn6xfesub3389.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
       { type: 'image', url: "https://img.zcool.cn/community/699938772f0c3vsef52z035165.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
       { type: 'image', url: "https://img.zcool.cn/community/699939fdc14f8d9sa1ezpe7019.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
       { type: 'image', url: "https://img.zcool.cn/community/699938774aa4brje76uf3v5977.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
       { type: 'image', url: "https://img.zcool.cn/community/6999387748dfbczygmwo3h3056.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
       { type: 'image', url: "https://img.zcool.cn/community/699939b272fadku8i9fcqs536.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" }
    ]
  },
  {
    id: "08",
    title: "广告短片",
    subtitle: "COMMERCIAL FILMS",
    category: "Commercial / 广告",
    year: "2023-2024",
    description: "商业广告短片合集",
    homeTitle: "广告短片",
    previewImg: "https://img.zcool.cn/community/699dc5bac3d7ajmvgfutii5082.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp",
    content: [
      { type: 'image', url: "https://img.zcool.cn/community/6999e7636724bxacv3hdk96360.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'video', url: "https://6swydf55qetcfsax.public.blob.vercel-storage.com/stodownload%20%281%29.mp4" },
      { type: 'image', url: "https://img.zcool.cn/community/699950c4ec701rg5jwltbe3040.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'video', url: "https://xebbj574h837wcry.public.blob.vercel-storage.com/%E5%BE%AE%E5%9E%8B%E5%85%BB%E8%82%B2%E7%BE%A4%E8%90%BD%E5%8E%8B%E7%BC%A9%E7%89%88.mp4" },
      { type: 'image', url: "https://img.zcool.cn/community/6999544a09770mkz6o3d4t7061.jpg?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'video', url: "https://6swydf55qetcfsax.public.blob.vercel-storage.com/%E8%BD%AC%E6%A4%85.mp4" },
      { type: 'image', url: "https://img.zcool.cn/community/699dc5bac3d7ajmvgfutii5082.png?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp" },
      { type: 'video', url: "https://xebbj574h837wcry.public.blob.vercel-storage.com/aporro%E5%93%81%E7%89%8C%E5%AE%A3%E4%BC%A0%E7%89%87.mp4" }
    ]
  }
];

// 教育与履历数据
const EXPERIENCES = [
  {
    title: "广州美术学院",
    tags: ["摄影与数码艺术专业", "2020-2024"],
    description: "在校期间系统学习了当代摄影艺术理论、商业摄影实务以及数码媒介创作。通过跨学科的艺术教育，建立了扎实的视觉审美基础与影像叙事能力，并将其应用于后续的商业实践与品牌传播中。",
    images: [
      "https://picui.ogmua.cn/s1/2026/02/26/699fe49c62bc2.webp",
      "https://picui.ogmua.cn/s1/2026/02/26/699fe49c94d9f.webp"
    ]
  },
  {
    title: "创始人IP视频专员",
    tags: ["奶糖派", "2025.06 – 2025.12"],
    description: "在此期间负责品牌创始人IP的视觉内容打造，专注女性成长与美学生活赛道。主导从前期拍摄规划到后期剪辑的全流程执行，并参与社交媒体平台的账号孵化与内容运营。",
    images: []
  },
  {
    title: "潮牌创意视频专员",
    tags: ["Aporro", "2024.07 – 2025.03"],
    description: "全面负责潮流珠宝品牌 Aporro 的海外视觉内容创作。工作内容涵盖海外市场趋势调研、创意策划及高质量短视频制作，致力于通过影像叙事强化品牌在国际市场 (Instagram) 的视觉表达。",
    images: [
      "https://picui.ogmua.cn/s1/2026/02/26/699fe49b49779.webp"
    ]
  },
  {
    title: "YZ 摄影工作室",
    tags: ["创始人", "商业摄影师", "2022.04 – 2024.06"],
    description: "创立并运营独立商业摄影工作室，提供影棚租赁及商业拍摄服务。在运营期间负责品牌维护与日常管理，并以制片人、摄影师及剪辑师等多重身份，为“柠季”等知名品牌策划并统筹制作商业宣传片。",
    images: [
      "https://picui.ogmua.cn/s1/2026/02/26/699fe49b184a7.webp"
    ]
  }
];

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [view, setView] = useState('home'); 
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // 浏览器历史记录管理：支持手机右划返回
  useEffect(() => {
    const handlePopState = (event) => {
      if (activeProject) {
        // 如果详情页打开，返回时关闭详情页
        setActiveProject(null);
        // 阻止默认返回（已经在 popstate 中了，这里通过 pushState 抵消掉后续可能的退出）
      } else if (view !== 'home') {
        // 如果在 Work 或 About，返回时回到 Home
        setView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeProject, view]);

  // 监听 activeProject 变化，同步到历史记录
  useEffect(() => {
    if (activeProject) {
      window.history.pushState({ type: 'project', id: activeProject.id }, '');
    }
  }, [activeProject]);

  // 监听 view 变化，同步到历史记录
  useEffect(() => {
    if (view !== 'home') {
      window.history.pushState({ type: 'view', id: view }, '');
    }
  }, [view]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const GrainOverlay = () => (
    <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-multiply">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
    </div>
  );

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' }
  ];

  // 统一的动画配置
  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.4, ease: "easeOut", delay: delay }
  });

  return (
    <div className={`min-h-screen relative overflow-x-hidden font-sans transition-colors duration-700 ${view === 'about' ? 'bg-[#0a0a0a] text-white' : 'bg-[#f0f0f0] text-black'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap');
        :root { --font-sans: 'Inter', sans-serif; }
        body { font-family: var(--font-sans); letter-spacing: -0.01em; }
        .serif-font { font-family: "New York", "Georgia", "Songti SC", "SimSun", serif; }
        .nav-link { letter-spacing: 0.1em; font-size: 11px; font-weight: 700; }
        .sans-zh { font-family: var(--font-sans), "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif; }
        ::-webkit-scrollbar { display: none; }
        .service-tag { 
          border: 1px solid rgba(255,255,255,0.2); 
          border-radius: 999px; 
          padding: 3px 14px; 
          font-size: 11px; 
          white-space: nowrap;
          color: rgba(255,255,255,0.7);
        }
      `}</style>
      
      <GrainOverlay />
      
      {/* 胶囊导航栏 - 桌面端：顶部；手机端：底部固定 */}
      <nav className="fixed md:top-0 bottom-8 md:bottom-auto left-0 w-full z-[100] flex justify-center py-0 md:py-10 pointer-events-none mt-0">
        <div className="relative flex items-center pointer-events-auto bg-white/10 backdrop-blur-md md:backdrop-blur-none rounded-full md:bg-transparent p-1 md:p-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`relative px-6 py-3 md:px-7 md:py-2 nav-link transition-colors duration-500 z-10 text-[12px] md:text-[11px] ${view === item.id ? 'text-white' : 'text-black'}`}
            >
              {item.label}
              {view === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full z-[-1] bg-[#a0a0a0]"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* 顶部标识 */}
      <div className="fixed top-0 left-0 w-full p-6 md:p-12 pointer-events-none z-[90] flex justify-between items-start">
        <div className="pointer-events-auto">
          <h1 className="text-[16px] md:text-[18px] font-black tracking-tighter leading-none cursor-pointer" onClick={() => setView('home')}>
            Liang Chujun
          </h1>
        </div>
        <a href="mailto:soulboyjade@gmail.com" className="pointer-events-auto nav-link opacity-40 hover:opacity-100 transition-opacity text-[10px] md:text-[11px]">Contact</a>
      </div>

      <AnimatePresence mode="wait">
        {/* --- 首页 VIEW --- */}
        {view === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-col items-center"
          >
            {/* 视频区域 - 手机端上移到顶部 */}
            <div className="h-[60vh] md:h-screen w-full flex items-center justify-center pt-24 md:pt-20">
              <motion.div 
                className="relative w-full md:w-[60vw] aspect-[4/3] z-10 bg-neutral-200 overflow-hidden cursor-pointer group"
                {...fadeInUp(0)}
                onClick={() => setCurrentBannerIndex((prev) => (prev + 1) % BANNER_VIDEOS.length)}
              >
                <AnimatePresence mode="wait">
                  <motion.video 
                    key={currentBannerIndex}
                    src={BANNER_VIDEOS[currentBannerIndex]}
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    preload="auto"
                    crossOrigin="anonymous"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  />
                </AnimatePresence>

                {/* 隐藏的预加载：提前加载下一个视频 */}
                <video 
                  key={`preload-${(currentBannerIndex + 1) % BANNER_VIDEOS.length}`}
                  src={BANNER_VIDEOS[(currentBannerIndex + 1) % BANNER_VIDEOS.length]}
                  preload="auto"
                  className="hidden"
                />

                {/* 简约圆点指示器 */}
                <div className="absolute bottom-6 left-0 w-full flex justify-center gap-3 z-20 pointer-events-none">
                  {BANNER_VIDEOS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentBannerIndex(idx);
                      }}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-500 pointer-events-auto shadow-sm ${
                        idx === currentBannerIndex 
                          ? 'bg-white scale-125 opacity-100' 
                          : 'bg-white opacity-40 hover:opacity-80 hover:scale-110'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            <section className="w-full max-w-7xl px-6 md:px-12 py-8 md:py-20 mb-[20vh] md:mb-0 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8">
              <motion.h2 
                className="text-[15vw] md:text-[12vw] font-bold tracking-tighter leading-[0.8]"
                {...fadeInUp(0.1)}
              >Gun*</motion.h2>
              <motion.div 
                className="text-right font-sans text-xs md:text-xl leading-tight opacity-80 self-end md:self-auto"
                {...fadeInUp(0.2)}
              >
                <p>Guangzhou / Shanghai,</p>
                <p>soulboyjade@gmail.com</p>
              </motion.div>
            </section>

            <section className="w-full max-w-7xl px-6 md:px-8 pb-20 md:pb-40 text-left mx-auto">
              <div className="flex flex-col gap-6 md:gap-8 items-start">
                <h3 className="text-3xl md:text-5xl font-bold sans-zh leading-tight"></h3>
                <motion.p 
                  className="text-base md:text-xl opacity-70 leading-relaxed sans-zh font-light max-w-3xl"
                  {...fadeInUp(0.3)}
                >
                  影像的本质是捕捉那些转瞬即逝的真实感。我试图通过低调而有力的表达，让观众在静默中感受到情感的张力。
                </motion.p>
              </div>
            </section>

            <section className="w-full max-w-6xl px-6 md:px-8 pb-32 md:pb-60 border-t border-black/5 pt-12 md:pt-20">
              <div className="flex flex-col">
                {PROJECTS.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    className="group border-b border-black/5 py-6 md:py-10 cursor-pointer relative transition-colors duration-500 hover:bg-black/[0.03]"
                    onClick={() => setActiveProject(project)}
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                    {...fadeInUp(index * 0.1)}
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      <h2 className="text-2xl md:text-4xl font-bold sans-zh tracking-tight transition-all duration-500 group-hover:italic">
                        {project.homeTitle || project.title}
                      </h2>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <AnimatePresence>
              {hoveredProject && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 40 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="hidden md:block fixed pointer-events-none z-[500] w-64 aspect-[4/5] bg-white overflow-hidden shadow-2xl"
                  style={{ top: mousePos.y - 120, left: mousePos.x }}
                >
                  <img src={hoveredProject.previewImg} className="w-full h-full object-cover" alt="Preview" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* --- 作品展示 VIEW --- */}
        {view === 'work' && (
          <motion.div
            key="work"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen pt-24 md:pt-48 pb-32 md:pb-60 px-2 md:px-8"
          >
            <div className="max-w-[1400px] mx-auto mb-8 md:mb-20 text-left px-4 md:px-0">
              <h2 className="text-4xl md:text-7xl font-light tracking-tighter mb-2">Selected Work</h2>
              <p className="text-[11px] tracking-tighter opacity-40 uppercase font-light">Visual Storytelling</p>
            </div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
              {PROJECTS.map((project, index) => (
                <motion.div 
                  key={project.id} 
                  className="group cursor-pointer relative" 
                  onClick={() => setActiveProject(project)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                >
                  <div className="aspect-[16/10] overflow-hidden bg-neutral-200 relative transition-all duration-700 ease-out">
                    <img src={project.previewImg} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={project.title} />
                    <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-none shadow-sm transition-all duration-400 group-hover:bg-white/30 z-10 pointer-events-none border border-white/30">
                      <h3 className="text-[13px] font-medium sans-zh text-black m-0 leading-none tracking-tight">{project.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* --- 关于页 VIEW --- */}
        {view === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pb-60"
          >
            <div className="flex flex-col gap-24 md:gap-56">
              <section className="relative w-full h-screen overflow-hidden">
                <motion.div 
                  className="absolute inset-0"
                  {...fadeInUp(0)}
                >
                  <img 
                    src="https://youke.xn--y7xa690gmna.cn/s1/2026/02/24/699c872569887.webp" 
                    alt="Portrait" 
                    className="w-full h-full object-cover" 
                  />
                  {/* 底部渐变遮罩 - 优化手机端文字可读性与过渡 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-100 md:opacity-60"></div>
                </motion.div>
                <div className="relative h-full flex flex-col md:flex-row items-center px-6 md:px-20 max-w-7xl mx-auto pt-24 md:pt-0">
                  <div className="w-full md:w-auto flex flex-col gap-4 md:gap-6 max-w-2xl mt-auto md:mt-0 pb-12 md:pb-0 z-10">
                    <motion.p 
                      className="text-base md:text-2xl leading-snug sans-zh font-light text-white"
                      {...fadeInUp(0.2)}
                    >
                      梁楚君<br/>
                      摄影师，影像创作者。
                    </motion.p>
                    <motion.p 
                      className="text-xs md:text-base opacity-60 sans-zh leading-relaxed text-white"
                      {...fadeInUp(0.3)}
                    >
                      目前常住于广州<br/>从事影像叙事、品牌视觉策划及艺术摄影研究。
                    </motion.p>
                  </div>
                </div>
              </section>

              <section className="px-6 md:px-8 max-w-5xl mx-auto w-full">
                <motion.h3 
                  className="text-lg md:text-2xl font-light sans-zh leading-tight text-white mt-12 md:mt-0"
                  {...fadeInUp(0.2)}
                >
                  我在视觉创作领域拥有多维度的实践经验，<br />
                  从独立工作室的运作，到品牌的海外视觉营销，再到社交媒体IP孵化，<br />
                  致力于通过视觉内容捕捉品牌的核心美感。
                </motion.h3>
              </section>

              {/* 履历部分 */}
              <section className="flex flex-col px-6 md:px-8 max-w-5xl mx-auto w-full">
                <motion.span 
                  className="nav-link text-white/30 uppercase tracking-[0.2em] mb-8 md:mb-12"
                  {...fadeInUp(0.1)}
                >Experience / 履历</motion.span>
                <div className="flex flex-col">
                  {EXPERIENCES.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="group border-t border-white/20 py-8 md:py-10 cursor-pointer first:border-t-0"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      {...fadeInUp(index * 0.1 + 0.2)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
                        {/* 字体修改：使用 font-light (细体) + sans-zh (黑体家族) */}
                        <div className="flex items-center gap-4">
                          <h4 className="text-lg md:text-2xl font-light sans-zh group-hover:italic transition-all duration-500 text-white/90">
                            {item.title}
                          </h4>
                          <motion.div
                            animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" />
                          </motion.div>
                        </div>
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {item.tags.map((tag, tIdx) => (
                            <div key={tIdx} className="service-tag group-hover:border-white/60 group-hover:text-white transition-all">
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-8 max-w-3xl flex flex-col gap-8">
                              <p className="text-sm md:text-base opacity-50 leading-relaxed sans-zh font-light">
                                {item.description}
                              </p>
                              {item.images && item.images.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {item.images.map((img, imgIdx) => (
                                    <div key={imgIdx} className="bg-white/5 overflow-hidden">
                                      <img src={img} alt="" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity" />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#f9f9f9] text-black z-[2000] overflow-y-auto"
          >
            <nav className="p-6 md:p-12 flex justify-between items-center sticky top-0 bg-[#f9f9f9]/80 backdrop-blur-md z-[2100]">
              <button onClick={() => setActiveProject(null)} className="flex items-center gap-2 group font-black text-[10px] md:text-[11px] tracking-widest uppercase text-black">
                <ArrowLeft size={14} className="md:w-4 md:h-4" /> <span>Back</span>
              </button>
            </nav>
            <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32">
              <h2 className="text-3xl md:text-[4vw] font-bold tracking-tight mb-6 md:mb-8 sans-zh text-black">{activeProject.title}</h2>
              <div className="max-w-xl mb-20 md:mb-32">
                <p className="text-base md:text-lg leading-relaxed opacity-50 sans-zh text-black whitespace-pre-wrap">{activeProject.description}</p>
              </div>
              <div className="flex flex-col items-center gap-12 md:gap-40 mb-20 md:mb-40">
                {activeProject.content.map((item, i) => (
                  item.type === 'video' ? (
                    <div key={i} className="w-full md:w-[90%] aspect-video bg-black">
                      <video 
                        src={item.url} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        controls 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ) : (
                    <img key={i} src={item.url} alt="" className="w-full h-auto md:w-[90%]" />
                  )
                ))}
              </div>
            </div>
            <footer className="py-32 text-center">
              <button onClick={() => setActiveProject(null)} className="nav-link text-black hover:opacity-40 transition-opacity underline">Close Case</button>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 底部标识 */}
      <div className={`w-full p-6 md:p-12 flex justify-between items-end relative z-50 ${view === 'about' ? 'bg-[#0a0a0a] text-white border-t border-white/5' : 'border-t border-black/5'}`}>
        <h2 className="text-[16px] md:text-[18px] font-black tracking-widest sans-zh">梁 楚 君</h2>
        <div className="text-right font-sans text-[10px] md:text-[12px] leading-tight opacity-40">
          <p>Guangzhou,</p>
          <p>soulboyjade@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
