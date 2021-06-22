export default {
    mounted: el => {
        function loadImage() {
            el.src = el.dataset.src
        }

        function callback(entries, observer) {
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                } else {
                    loadImage();
                    observer.unobserve(el);
                }
            })
        }
        function createIntersectionObserver() {
            const option = {
                root: null,
                threshold: 0,
            } 
            
            const observer = new IntersectionObserver(callback, option);
            observer.observe(el);
        }
        
        if(!window['IntersectionObserver']) {
            loadImage();
        } else { 
            createIntersectionObserver();
        }
    }
}