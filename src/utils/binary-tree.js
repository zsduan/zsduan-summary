/*
 * @Author: zs.duan
 * @Date: 2023-01-14 15:46:36
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-14 17:30:09
 * @FilePath: \vue2+js+eui+template\src\utils\binary-tree.js
 */

// 二叉树原理 左边一定比底数小（一层比一层小） 右边一定比底数大 （一层比一层大）
// 创建 二叉树
class CreatedTree{
    constructor(data , left , right){
        this.data = data;
        this.left = left;
        this.right = right;
        this.count = 1;
    }
}

// 操作二叉树
/*
 * method insert 插入节点
 * method romve 删除节点
 * method find 查找节点
 * method getMaxNode 获取最大节点
 * method getMinNode 获取最小节点
 * 
*/ 
class BSTree{
    constructor(TreeNode = null){
        this.root = TreeNode || null;
    }

    // 删除一个节点
    #_romoveNode(node , data){
        if(!node){
            return null
        }
        if(data == node.data){
            // 如果都为空 直接返回null
            if(!node.left && !node.right){
                return null
            }
            // 如果左边为空 返回右边
            if(!node.left) return node.right;
            // 如果右边为空 返回左边
            if(!node.right) return node.left;
            // 有两个节点的节点 
            /*  
             做法：
                找到待删除节点的右子树上的最小值创建一个临时节点。 因为根节点就是最小的
                将临时节点上的值复制到待删除节点，然后再删除临时节点
            */
 
            // 寻找右子树上的最小值
            let temNode = this.getMinNode(node.right);
            node.data = temNode.data;
            node.right = this.#_romoveNode(node.right , temNode.data);
            return node;
        }else if (data < node.data){
            node.left = this.#_romoveNode(node.left , data);
            return node;
        }else{
            node.right = this.#_romoveNode(node.right , data);
            return node;
        }
    }

    // 删除指定节点数据
    romve(data){
        this.root = this.#_romoveNode(this.root , data)
    }

    // 插入节点
    insert(data){
        let newNode = new CreatedTree(data , null , null)
        if(!this.root){
            this.root = newNode;
            return ;
        }
        let currNode = this.root;
        let parentNode = null;
        while(true){
            parentNode = currNode;
            if(newNode.data < currNode.data){
                // 更新当前指点的指向
                currNode = currNode.left;
                // 当前节点为空时，说明找到了正确的插入位置
                if(!currNode){
                    parentNode.left = newNode;
                    break;
                }
            }else if(newNode.data > currNode.data){
                // 更新当前指点的指向
                currNode = currNode.right;
                // 当前节点为空时，说明找到了正确的插入位置
                if(!currNode){
                    parentNode.right = newNode;
                    break;
                }
            }else if(newNode.data == currNode.data){
                // 如果给定的数据再次出现，就更新计数值
                currNode.count ++;
                break;
            }
        }
    }

    // 查找节点
    find(data){
        let currNode = this.root;
        while(currNode){
            if(currNode.data == data){
                return currNode
            }else if(currNode.data < data){
                currNode = currNode.right;
            }else{
                currNode = currNode.left;
            }
        }
        return null
    }

    // 获取最小值节点
    getMinNode(node = this.root){
        if(!node)return null;
        let currNode = node;
        while(currNode.left){
            currNode = currNode.left;
        }
        return currNode;
    }

    // 获取最大值节点
    getMaxNode(node = this.root){
        if(!node)return null;
        let currNode = node;
        while(currNode.right){
            currNode = currNode.right;
        }
        return currNode;
    }
}

/*
 * 优点 导入之后 编辑器有提示可以操作的函数提示 
 * 缺点 导入之后只能用它 不能多变量使用
*/ 
export const CreatedTreeNode = new BSTree;


/*
 * 优点 导入之后 可以多处使用 还可以使用上一个的二叉树
 * 缺点 导入之后 没有智能提示
*/ 
export const CreatedTreeNodes = (...arg) =>{
    let options = {
        TreeNode : null , 
        success : (reslut)=>{},
        fail : (error) =>{}
    }
    options = {
        ...options,
        ...arg[0]
    }
    options.success(new BSTree(options.TreeNode));
}