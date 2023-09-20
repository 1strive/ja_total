function compress(file, maxWidth, maxHeight, quality, callback) {
    const reader = new FileReader();
    reader.onload = function () {
        console.log(file, 'file');
        const img = new Image();//等价于 document.createElement('img')
        img.onload = function () {
            console.log(img, 'img');
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            let width = img.width;
            let height = img.height;
            if (width > maxWidth) {
                height *= maxWidth / width;
                width = maxWidth;
            }
            if (height > maxHeight) {
                width *= maxHeight / height;
                height = maxHeight;
            }

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            const result = canvas.toDataURL('image/jpeg', quality);
            callback(result);
        };
        console.log(reader.result, 'reader.result');
        img.src = reader.result;
    };
    reader.readAsDataURL(file);
}

const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener('change', function () {
    const file = fileInput.files[0];
    compress(file, 800, 800, 0.7, function (result) {
        const img = document.createElement('img');
        img.src = result;
        document.body.appendChild(img);
    });
});

//封装函数，传入file,需求最大宽高，压缩系数和对结果的操作回调
//FileReader转为base64 
//新建canvas,将参数提供给canvas.drawImage(img, dx, dy, dWidth, dHeight);
//canvas.toDataURL(type, quality);获取压缩后base64格式的图片

