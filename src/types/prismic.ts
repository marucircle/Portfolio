// Code generated by prismic-ts-codegen. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Blogs documents */
interface BlogsDocumentData {
    /**
     * title field in *Blogs*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blogs.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * thumbnail field in *Blogs*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blogs.thumbnail
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    thumbnail: prismicT.ImageField<never>;
    /**
     * contents field in *Blogs*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blogs.contents
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    contents: prismicT.RichTextField;
}
/**
 * Blogs document from Prismic
 *
 * - **API ID**: `blogs`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<BlogsDocumentData>, "blogs", Lang>;
/** Content for News documents */
interface NewsDocumentData {
    /**
     * title field in *News*
     *
     * - **Field Type**: Title
     * - **Placeholder**: ニュースタイトル
     * - **API ID Path**: news.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * summary field in *News*
     *
     * - **Field Type**: Text
     * - **Placeholder**: 概要
     * - **API ID Path**: news.summary
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    summary: prismicT.KeyTextField;
    /**
     * content field in *News*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: 詳細
     * - **API ID Path**: news.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * News document from Prismic
 *
 * - **API ID**: `news`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<NewsDocumentData>, "news", Lang>;
/** Content for Skills documents */
interface SkillDocumentData {
    /**
     * name field in *Skills*
     *
     * - **Field Type**: Title
     * - **Placeholder**: スキル名
     * - **API ID Path**: skill.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * level field in *Skills*
     *
     * - **Field Type**: Number
     * - **Placeholder**: 1 ~ 10
     * - **API ID Path**: skill.level
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    level: prismicT.NumberField;
    /**
     * description field in *Skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: 具体的な説明
     * - **API ID Path**: skill.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
}
/**
 * Skills document from Prismic
 *
 * - **API ID**: `skill`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SkillDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SkillDocumentData>, "skill", Lang>;
export type AllDocumentTypes = BlogsDocument | NewsDocument | SkillDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { BlogsDocumentData, BlogsDocument, NewsDocumentData, NewsDocument, SkillDocumentData, SkillDocument, AllDocumentTypes };
    }
}
