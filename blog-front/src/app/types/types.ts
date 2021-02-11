import { NumberLiteralType } from "typescript";

export interface PostAttribute {
  id?: number
  title: string
  categoryId?: number
  category?: PostCategoriesAttribute
  show?: boolean
  content?: string
  tags?: any[]
  thumbnail?: string
  view?: number
  replyCount?: number,
  createdAt?: Date
}

export interface PostCategoriesAttribute {
  id?: number
  name: string
  priority?: number
  show?: number | boolean
  sideShow?: number | boolean
  postCount?: number
  uiType?: string
}

export interface PostRepliesAttribute {
  id?: number
  post_id?: number
  user_name: string
  email?: string
  content?: string
  show: number | boolean
  ip: string
  createdAt?: Date
  updatedAt?: Date
}

export interface PostTagsAttribute {
  post_id?: number
  name: any
}

export interface SettingAttribute {
  id?: number
  key: string
  value?: string,
  type: string
}

export interface HomeSettingAttribute {
  id?: number
  title: string
  uiType: string
  listType: string
  postList?: number[],
  selectedPostList: PostAttribute[]
  show: boolean
  priority: number,
  categoryId?: number
}