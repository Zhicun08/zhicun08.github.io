var x, i, j, l, ll, selElmnt, a, b, c;
var ins,linkedin,paypal,wechat,alipay,amazon,didi,fackbook,lark,meituan,safari,taobao,tiktok,twitter,uber,weibo;

ins = document.getElementById("ins");
linkedin = document.getElementById("linkedin");
paypal = document.getElementById("paypal");
wechat = document.getElementById("wechat");
alipay = document.getElementById("alipay");
amazon = document.getElementById("amazon");
didi = document.getElementById("didi");
fackbook = document.getElementById("fackbook");
lark = document.getElementById("lark");
meituan = document.getElementById("meituan");
safari = document.getElementById("safari");
taobao = document.getElementById("taobao");
tiktok = document.getElementById("tiktok");
twitter = document.getElementById("twitter");
uber = document.getElementById("uber");
weibo = document.getElementById("weibo");

/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;

            if(h.innerHTML == "name"){
                ins.setAttribute("class","div-hide");
                didi.setAttribute("class","div-hide");
                meituan.setAttribute("class","div-hide");
                safari.setAttribute("class","div-hide");
                taobao.setAttribute("class","div-hide");
                tiktok.setAttribute("class","div-hide");
                twitter.setAttribute("class","div-hide");
                uber.setAttribute("class","div-hide");
                weibo.setAttribute("class","div-hide");
                linkedin.removeAttribute("class");
                wechat.removeAttribute("class");
                paypal.removeAttribute("class");
                alipay.removeAttribute("class");
                amazon.removeAttribute("class");
                fackbook.removeAttribute("class");
                lark.removeAttribute("class");
            }

            else if(h.innerHTML == "address"){
                ins.setAttribute("class","div-hide");
                didi.removeAttribute("class");
                meituan.removeAttribute("class");
                safari.setAttribute("class","div-hide");
                taobao.removeAttribute("class");
                tiktok.setAttribute("class","div-hide");
                twitter.setAttribute("class","div-hide");
                uber.removeAttribute("class");
                weibo.setAttribute("class","div-hide");
                linkedin.setAttribute("class","div-hide");
                wechat.setAttribute("class","div-hide");
                paypal.setAttribute("class","div-hide");
                alipay.setAttribute("class","div-hide");
                amazon.removeAttribute("class");
                fackbook.setAttribute("class","div-hide");
                lark.setAttribute("class","div-hide");
            }
            else if(h.innerHTML == "number"){
                ins.removeAttribute("class");
                didi.removeAttribute("class");
                meituan.removeAttribute("class");
                safari.setAttribute("class","div-hide");
                taobao.removeAttribute("class");
                tiktok.setAttribute("class","div-hide");
                twitter.setAttribute("class","div-hide");
                uber.removeAttribute("class");
                weibo.setAttribute("class","div-hide");
                linkedin.setAttribute("class","div-hide");
                wechat.removeAttribute("class");
                paypal.removeAttribute("class");
                alipay.removeAttribute("class");
                amazon.removeAttribute("class");
                fackbook.setAttribute("class","div-hide");
                lark.setAttribute("class","div-hide");
            }
            else if(h.innerHTML == "gender"){
                ins.removeAttribute("class");
                didi.removeAttribute("class");
                meituan.setAttribute("class","div-hide");
                safari.setAttribute("class","div-hide");
                taobao.removeAttribute("class");
                tiktok.removeAttribute("class");
                twitter.removeAttribute("class");
                uber.setAttribute("class","div-hide");
                weibo.removeAttribute("class");
                linkedin.removeAttribute("class");
                wechat.removeAttribute("class");
                paypal.setAttribute("class","div-hide");
                alipay.setAttribute("class","div-hide");
                amazon.removeAttribute("class");
                fackbook.removeAttribute("class");
                lark.removeAttribute("class");
            }
            else if(h.innerHTML == "company"){
                ins.setAttribute("class","div-hide");
                didi.setAttribute("class","div-hide");
                meituan.setAttribute("class","div-hide");
                safari.setAttribute("class","div-hide");
                taobao.setAttribute("class","div-hide");
                tiktok.setAttribute("class","div-hide");
                twitter.setAttribute("class","div-hide");
                uber.setAttribute("class","div-hide");
                weibo.setAttribute("class","div-hide");
                linkedin.removeAttribute("class");
                wechat.removeAttribute("class");
                paypal.setAttribute("class","div-hide");
                alipay.setAttribute("class","div-hide");
                amazon.setAttribute("class","div-hide");
                fackbook.setAttribute("class","div-hide");
                lark.removeAttribute("class");
            }
            else if(h.innerHTML == "school"){
                ins.setAttribute("class","div-hide");
                didi.setAttribute("class","div-hide");
                meituan.setAttribute("class","div-hide");
                safari.setAttribute("class","div-hide");
                taobao.setAttribute("class","div-hide");
                tiktok.setAttribute("class","div-hide");
                twitter.setAttribute("class","div-hide");
                uber.setAttribute("class","div-hide");
                weibo.setAttribute("class","div-hide");
                linkedin.removeAttribute("class");
                wechat.setAttribute("class","div-hide");
                paypal.setAttribute("class","div-hide");
                alipay.setAttribute("class","div-hide");
                amazon.setAttribute("class","div-hide");
                fackbook.setAttribute("class","div-hide");
                lark.setAttribute("class","div-hide");
            }
            else if(h.innerHTML == "photos"){
                ins.removeAttribute("class");
                didi.setAttribute("class","div-hide");
                meituan.setAttribute("class","div-hide");
                safari.setAttribute("class","div-hide");
                taobao.setAttribute("class","div-hide");
                tiktok.removeAttribute("class");
                twitter.removeAttribute("class");
                uber.setAttribute("class","div-hide");
                weibo.removeAttribute("class");
                linkedin.removeAttribute("class");
                wechat.removeAttribute("class");
                paypal.setAttribute("class","div-hide");
                alipay.setAttribute("class","div-hide");
                amazon.setAttribute("class","div-hide");
                fackbook.removeAttribute("class");
                lark.setAttribute("class","div-hide");
            }
            else if(h.innerHTML == "gender"){
                ins.removeAttribute("class");
                didi.setAttribute("class","div-hide");
                meituan.setAttribute("class","div-hide");
                safari.removeAttribute("class");
                taobao.removeAttribute("class");
                tiktok.removeAttribute("class");
                twitter.removeAttribute("class");
                uber.setAttribute("class","div-hide");
                weibo.removeAttribute("class");
                linkedin.removeAttribute("class");
                wechat.removeAttribute("class");
                paypal.setAttribute("class","div-hide");
                alipay.setAttribute("class","div-hide");
                amazon.removeAttribute("class");
                fackbook.removeAttribute("class");
                lark.setAttribute("class","div-hide");
            }



            

            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);

  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
    //   this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
    //   y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

function ifIcon(elmnt){
    /*examine icon*/
    var information= selection.options[selection.selectedIndex].value;

    if(information == "1"){
        for(i = 0; i < cl; i++ ){
            icon = container[i].getElementsByTagName("div")[0];
            icon.setAttribute("class","div-hide");
         }
    }
  
    // for(i = 0; i < cl; i++ ){
    //     icon = container[i].getElementsByTagName("div")[0];
    // }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);