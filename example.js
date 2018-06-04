const magnetLinkRegex = require('magnet-link-regex')

const urls = [
  `magnet:?xt=urn:btih:211361b71d2e589ca44b99e0b9ce7d838d58e48a&dn=The.Big.Bang.Theory.S11E22.HDTV.x264-SVA&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969`,
  `magnet:?xt=urn:btih:42f7d12bdf685907ddc7eae532d3e4214e8f12d5&dn=Fear.the.Walking.Dead.S04E07.HDTV.x264-SVA%5Bettv%5D&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969`,
  `magnet:?xt=urn:btih:37a8e3b4564996c13b408ebb695431dbf9f0e1c8&dn=Billions.S03E11.WEB.H264-DEFLATE%5Bettv%5D&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969`
]
const pattern = magnetLinkRegex({exact: true})

urls.forEach(url => {
  console.log(pattern.test(url))
})
