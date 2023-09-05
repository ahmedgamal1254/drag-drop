btn=document.getElementById("btn")
input=document.getElementById("input")
boxes=document.querySelectorAll(".box")
drag=null;
arr=null;

btn.onclick=function () {
    if(input.value != ''){
        boxes[0].innerHTML+=`
        <div class="item" draggable="true">${input.value}</div>
        `
        input.value=''
    }

    dragItem()
}

function dragItem() {
    let items=document.querySelectorAll(".item")
    box_1=null;
    items.forEach(item=>{
        item.addEventListener("dragstart",function (){
            drag=item
            item.style.opacity="0.5"
        })

        item.addEventListener("dragend",function (){
            drag=null
            item.style.opacity="1"
        })

        boxes.forEach(box=>{
            box.addEventListener("dragover",function (e){
                e.preventDefault()
            })

            box.addEventListener("drop",function (){
                box.append(drag)
                box_1=box
                drag_item=drag.innerHTML
                let items;
                if(localStorage.getItem(box_1.id) === null){
                    items=[];
                }else{
                    items=JSON.parse(localStorage.getItem(`${box_1.id}`))
                }

                items.push(drag_item)
                localStorage.setItem(`${box_1.id}`,JSON.stringify(items))
            })
        })
    })
}

window.onload=function (){
    dragItem()
}

item1=window.localStorage.getItem("item1")
item2=window.localStorage.getItem("item2")
item3=window.localStorage.getItem("item3")

function make_items_div(item,div) {
    arr_item=JSON.parse(item)
    arr_item_final=[];
    if(arr_item != null){
        for(let i=0;i<arr_item.length;i++){
            if(arr_item_final.indexOf(arr_item[i]) == -1){
                arr_item_final.push(arr_item[i])
            }
        }
    
        for (let i=0;i<arr_item_final.length;i++){
            document.getElementById(`${div}`).innerHTML+=`
                <div class="item" draggable="true">${arr_item_final[i]}</div>
            `
        }
    }
}

make_items_div(item1,"item1")
make_items_div(item2,"item2")
make_items_div(item3,"item3")

function values(item){
    arr_item=JSON.parse(item)
    arr_item_final=[];
    for(let i=0;i<arr_item.length;i++){
        if(arr_item_final.indexOf(arr_item[i]) == -1){
            arr_item_final.push(arr_item[i])
        }
    }

    return arr_item_final
}

arr3=[];

if(item2 != null){
    arr1=values(item2)
    arr3=arr1
}

if(item3 != null){
    arr2=values(item3)
    arr3=arr1.concat(arr2)
}

vals=document.getElementById("item1")
items=vals.querySelectorAll(".item")

if(arr3 != null){
    values_box_1=[]
    values_final=[]
    for(let i=0;i<items.length;i++){
        values_box_1.push(items[i].innerHTML)
    }

    for(let i=0;i<values_box_1.length;i++){
        if(arr3.indexOf(values_box_1[i]) >= 0){
           values_final.push(values_box_1[i])
        }
    }
}

items_res=[]

for(let i=0;i<items.length;i++){
    if(values_final.indexOf(items[i].innerHTML) == -1){
        items_res.push(items[i])
    }
}

if(item1 != null || item2 != null || item3 != null){
    vals.innerHTML="<h2>Box</h2>"
    for(let i=0;i<items_res.length;i++){
        vals.innerHTML+=`
        <div class="item" draggable="true">
            ${items_res[i].innerHTML}
        </div>
        `
    }

}


document.getElementById("restore").addEventListener("click",function (){
    window.localStorage.clear()
    document.getElementById("text").innerHTML="restore page success"
    document.getElementById("text").classList="alert alert-success"
    document.getElementById("text").style.marginTop=5+"px"
})