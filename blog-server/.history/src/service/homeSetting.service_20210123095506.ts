import homeSettingDao from "../dao/homeSetting.dao";
import postDao from "../dao/post.dao";
import homeSettingModel from "../sql/models/homeSetting.model";
import { PostsAttribute } from "../sql/models/post.model";
import postCategoryModel from "../sql/models/postCategory.model";

class HomeSettingService {
    
    public async getSetPosts() {
        let list = await homeSettingDao.getList();
        let promises = [];
        await list.forEach( async s => {
            let { uiType, listType} = s;
            let postCount = uiType == 'triple' ? 3 : 4;
            if(listType === 'popular') {
                promises.push(postDao.getLimiedList(true,postCount,s.categoryId));
            }else if(listType === 'recent') {
                promises.push(postDao.getLimiedList(false, postCount,s.categoryId));
            }else if(s.postList.length > 0) {
                promises.push(postDao.getListInIds(<number[]>s.postList));
            }
            // if(uiType === 'main') {
            //     let randomIndex = Math.floor(Math.random() * s.postList.length);
            //     s.postList = [<PostsAttribute>s.postList[randomIndex]];
            // }
        });
        await Promise.all(promises).then(r=> {
          console.log(r,'???')  
        })
        console.log('결과인데유',list)
        return list;
        // return homeSettingDao.getList().then( async h => {
        //     await h.forEach( async s => {
        //         let { uiType, listType} = s;
        //         let postCount = uiType == 'triple' ? 3 : 4;
        //         if(listType === 'popular') {
        //             postDao.getLimiedList(true,postCount,s.categoryId);
        //         }else if(listType === 'recent') {
        //             postDao.getLimiedList(false, postCount,s.categoryId)
        //         }else if(s.postList.length > 0) {
        //             s.postList = await postDao.getListInIds(<number[]>s.postList);
        //             console.log(s.postList,'요길바')
        //         }
        //         if(uiType === 'main') {
        //             let randomIndex = Math.floor(Math.random() * s.postList.length);
        //             s.postList = [<PostsAttribute>s.postList[randomIndex]];
        //         }
        //         console.log('에효기다려..')
        //     });
        //     console.log('결과인데유',h)
        //     return h;
        // });
    }

}

export default new HomeSettingService();
