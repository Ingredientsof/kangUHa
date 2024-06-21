


// 커서 따라다니기

document.addEventListener (
    'mousemove', function(e) {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
);
