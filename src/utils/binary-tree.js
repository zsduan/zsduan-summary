/**二叉树原理 左边一定比底数小（一层比一层小） 右边一定比底数大 （一层比一层大）*/ 
/**创建 二叉树*/ 
class CreatedTree{
    constructor(data , left , right){
        this.data = data;
        this.left = left;
        this.right = right;
        this.count = 1;
    }
}

/**
 * 操作二叉树
 * @method insert 插入节点
 * @method romve 删除节点
 * @method find 查找节点
 * @method getMaxNode 获取最大节点
 * @method getMinNode 获取最小节点
 * 
*/ 
class BSTree{
    constructor(TreeNode = null){
        /**
         * 二叉树列
         * */ 
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

    /**
     * 删除指定节点数据
     * @param {string} data 需要删除的数据
     * */ 
    romve(data){
        this.root = this.#_romoveNode(this.root , data)
    }

    /**
     * 插入节点
     * @param {string} data 需要插入的数据
     * */ 
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

    /**
     * 查找节点
     * @param {string} data 需要查找的数据
     * @return findNode
     */
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

    /**
     * 获取最小值节点
     * @return minNode
     * */ 
    getMinNode(node = this.root){
        if(!node)return null;
        let currNode = node;
        while(currNode.left){
            currNode = currNode.left;
        }
        return currNode;
    }

    /**
     * 获取最大值节点
     * @return maxNode
     */
    getMaxNode(node = this.root){
        if(!node)return null;
        let currNode = node;
        while(currNode.right){
            currNode = currNode.right;
        }
        return currNode;
    }
}

/**
 * 创建二叉树
 * @method insert 插入节点
 * @method romve 删除节点
 * @method find 查找节点
 * @method getMaxNode 获取最大节点
 * @method getMinNode 获取最小节点
*/ 
export default BSTree;