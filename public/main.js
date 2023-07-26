console.log('这里是main.js  12222111')


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

//AJAX加载JS 
getJS.onclick=()=>{
    const request= new XMLHttpRequest();
    request.open('get','/123.js');
    request.onload = ()=>{
        console.log('request.response请求响应的内容是：'+request.response)
        const script = document.createElement('script');
        script.innerHTML = request.response;
        document.body.appendChild(script)
    }
    request.onerror=()=>{
        console.log('失败')
    }
    request.send();
}


//AJAX加载HTML
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('get','/3.html');//r.readyState=1

    //监听onreadystatechange事件
    request.onreadystatechange =()=>{
                console.log(request.response)

        console.log(request.readyState)//监听接下来的readyState(有01234几个阶段)
        if (request.readyState ===4){//等于四只是下载完成但不知道是成功的完成还是失败的页面下载完
            console.log('如果网页成功加载的status是2xx,如果加载失败的话状态码是:4xx或者是5xx,现在已经下载完成状态码为:'+request.status)

            if(request.status >=200 && request.status<300){
                console.log('想要的页面下载完成')
                console.log('打印出来请求的内容'+request.response)
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            }else{
                alert('加载html失败')
            }
        }
    } 
    request.send();//r.readyState=2
}



//请求XML页面
getXML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get','/4.xml')
    request.onreadystatechange = ()=>{
        //直接把状态码固定成200
        if(request.readyState===4 && request.status === 200){
            console.log('xml请求返回的是一个dom对象'+typeof request.responseXML+'这个对象的内容是:'+request.response)//这是一个dom对象
            
            //在控制台显示
            const dom = request.responseXML;
            const text = dom.documentElement.getElementsByTagName('warning')[0].textContent.trim()
            console.log(text)
            
            //在页面显示
            const div =document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send();
}



//请求JSON
getJSON.onclick = ()=>{
    const r = new XMLHttpRequest()
    r.open('get','/5.json')
    r.onreadystatechange=()=>{
        if(r.readyState === 4 && r.status===200){
            const object = JSON.parse(r.response)
            console.log(object)
            console.log('json本来的内容为:'+r.response)
            //更改标题内容
            myName.textContent = object.name
        }
    }
    r.send()
}