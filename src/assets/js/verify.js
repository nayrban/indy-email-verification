const userAgent = navigator.userAgent || navigator.vendor;

const iOS =  /iPad|iPhone|iPod/i.test(userAgent);
const Android = /Android/i.test(userAgent);

if (__didcomm_url && (iOS || Android)) {
  window.location = __didcomm_url;
}
