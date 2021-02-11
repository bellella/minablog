import homeSettingDao from "../dao/homeSetting.dao";
import postDao from "../dao/post.dao";
import { PostsAttribute } from "../sql/models/post.model";
import postCategoryModel from "../sql/models/postCategory.model";

class HomeSettingService {
    
    public getMainPosts() {
        homeSettingDao.getList().then( h => {
            h.forEach( async s => {
                let { uiType, listType} = s;
                let postCount = uiType == 'triple' ? 3 : 4;
                if(listType === 'popular') {
                    postDao.getLimiedList(true,postCount,s.categoryId);
                }else if(listType === 'recent') {
                    postDao.getLimiedList(false, postCount,s.categoryId)
                }else {
                    s.postList = await postDao.getListInIds(<number[]>s.postList);
                }
                if(uiType === 'main') {
                    let randomIndex = Math.floor(Math.random() * s.postList.length);
                    s.postList = [<PostsAttribute>s.postList[randomIndex]];
                }
            })
        })
    }

}

export default new HomeSettingService();
