$(document).ready(function(){Stun.utils.showThemeInConsole(),CONFIG.shortcuts&&CONFIG.shortcuts.switchPost&&Stun.utils.registerSwitchPost(),CONFIG.externalLink&&Stun.utils.addIconToExternalLink("#footer"),Stun.utils.pjaxReloadBoot=function(){if(CONFIG.codeblock){var t=CONFIG.codeblock.style;t==="default"?(this.addCodeHeader(),this.addCopyButton()):t==="carbon"?(this.addCodeHeader("carbon"),this.addCopyButton("carbon")):t==="simple"&&this.addCopyButton("simple"),this.registerCopyEvent()}if(CONFIG.reward&&this.registerShowReward(),CONFIG.lazyload&&this.lazyLoadImage(),CONFIG.galleryWaterfall&&this.showImageToWaterfall(),CONFIG.externalLink){var e=".archive, .post-title";this.addIconToExternalLink(e)}CONFIG.fancybox?this.wrapImageWithFancyBox():CONFIG.zoomImage&&this.registerZoomImage()},Stun.utils.pjaxReloadBoot()});
