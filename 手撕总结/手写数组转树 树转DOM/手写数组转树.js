/*
 * @Author: JA
 * @Date: 2022-09-19 16:30:14
 * @LastEditTime: 2022-09-19 16:39:05
 * @LastEditors: JA
 */
function arrayToTree(arr) {
    if (!arr.length) return null
    let nodeparent = arr[0]
    let tree = {
        id: nodeparent.id,
        val: nodeparent.val,
        children: arr.length > 0 ? totree(nodeparent.id, arr) : []
    }
    return tree
}

function totree(parentid, arr) {
    let children = []
    for (let i = 0; i < arr.length; i++) {
        let node = arr[i]
        if (node.parentId === parentid) {
            children.push({
                id: node.id,
                val: node.val,
                children: totree(node.id, arr)
            })
        }
    }
    return children
}


let input1 = [
    {
        id: 1, val: '学校', parentId: null
    }, {
        id: 2, val: '班级1', parentId: 1
    }, {
        id: 3, val: '班级2', parentId: 1
    }, {
        id: 4, val: '学生1', parentId: 2
    }, {
        id: 5, val: '学生2', parentId: 2
    }, {
        id: 6, val: '学生3', parentId: 3
    },
]
console.log(arrayToTree(input1))
