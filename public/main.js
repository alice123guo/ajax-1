console.log('这里是main.js  12222111')

getJS.onclick=()=>{
    const r= new XMLHttpRequest();
    r.open('get','/123.js');
    r.onload = ()=>{
        console.log('r.response请求响应的内容是：'+r.response)
        const script = document.createElement('script');
        script.innerHTML = r.response;
        document.body.appendChild(script)
    }
    r.onerror=()=>{
        console.log('失败')
    }
    r.send();
}

//监听点击CSS按钮的时候是不是真的请求成功
getCSS.onclick=()=>{
    //步骤1：创建一个HttpRequest函数
    const request = new XMLHttpRequest();
    //步骤2：调用函数的Open方法
    request.open('GET','/style.css');//MDN搜索HttpRequest open MDN找用法
    //步骤3：监听对象的onload和onerror事件
    request.onload = ()=>{
        console.log("request.response内容："+request.response)
        //把css内容加载到HTML中(创建新标签style内容为请求回应的东西，然后插入到head中)
        const style = document.createElement('style');
        style.innerHTML = request.response;
        document.head.appendChild(style)
    }
    request.onerror = ()=>{
        console.log('失败了')
    }
    //步骤4：发送请求（调用对象的send方法）
    request.send();
}