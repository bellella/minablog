import homeSettingDao from "../dao/homeSetting.dao";
import postDao from "../dao/post.dao";
import { HomeSettingAttribute } from "../sql/models/homeSetting.model";
import { PostsAttribute } from "../sql/models/post.model";

class HomeSettingService {

    public async getSetPosts() {
        let list: HomeSettingAttribute[] = await homeSettingDao.listBlog();
        for (let set of list) {
            let { uiType, listType } = set;
            let postCount = uiType == 'triple' ? 3 : (uiType == 'main' ? 5 : 2);
            if (listType === 'popular') {
                set.postList = await postDao.limiedList(true, postCount, set.categoryId);
            } else if (listType === 'recent') {
                set.postList = await postDao.limiedList(false, postCount, set.categoryId);
            } else if (listType === 'custom' && set.postList.length > 0) {
                set.postList = await postDao.getListInIds(<number[]>set.postList);
            }
            if (uiType === 'main') {
                let randomIndex = Math.floor(Math.random() * set.postList.length);
                set.postList = [<PostsAttribute>set.postList[randomIndex]];
            }
        };
        return list;
    }

}

export default new HomeSettingService();
