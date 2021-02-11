import homeSettingDao from "../dao/homeSetting.dao";
import postDao from "../dao/post.dao";
import homeSettingModel from "../sql/models/homeSetting.model";
import { PostsAttribute } from "../sql/models/post.model";
import postCategoryModel from "../sql/models/postCategory.model";

class HomeSettingService {
    
    public async getSetPosts() {
        homeSettingDao.getList().then( h => {
            h.forEach( async s => {
                let { uiType, listType} = s;
                let postCount = uiType == 'triple' ? 3 : 4;
                if(listType === 'popular') {
                    postDao.getLimiedList(true,postCount,s.categoryId);
                }else if(listType === 'recent') {
                    postDao.getLimiedList(false, postCount,s.categoryId)
                }else if(s.postList.length > 0) {
                    console.log('큐큐',s.postList)
                    s.postList = await postDao.getListInIds(<number[]>s.postList);
                }
                if(uiType === 'main') {
                    let randomIndex = Math.floor(Math.random() * s.postList.length);
                    s.postList = [<PostsAttribute>s.postList[randomIndex]];
                }
            });
            return h;
        });
    }

}

export default new HomeSettingService();
