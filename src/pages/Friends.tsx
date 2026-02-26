import Layout from "../components/Layout";
import config from "../config";
import linksConfig from "../links";
import Head from "next/head";
import Breadcrumb from "../components/Breadcrumb";
import giscusConfig from "@/giscusConfigs";
import dynamic from "next/dynamic";
import LinkCard from "../components/LinkCard";
import { useState } from "react";

const Giscus = dynamic(() => import("@giscus/react").then((mod) => mod.default), {
    ssr: false,
    loading: () => <div className="text-center py-4 text-text-secondary">加载评论中...</div>
});

interface LinkSectionProps {
    title: string;
    description: string;
    links: Array<{
        site_name: string;
        site_url: string;
        site_description: string;
        site_avatar?: string;
        is_active?: boolean;
    }>;
}

const LinkSection = ({ title, description, links }: LinkSectionProps) => {
    return (
        <>
            <div className="mb-6">
                <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
                <p className="text-sm text-default-600">
                    {description}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {links.map((link) => (
                    <LinkCard
                        key={link.site_name}
                        site_name={link.site_name}
                        site_url={link.site_url}
                        site_description={link.site_description}
                        site_avatar={link.site_avatar}
                        is_active={link.is_active}
                    />
                ))}
            </div>
        </>
    );
};

const Friends = () => {
    const links = linksConfig.links;
    const aggregations = linksConfig.blogAggregations;
    const [showComments, setShowComments] = useState(false);

    return (
        <Layout>
            <Head>
                <title>友情链接 | 柒色墨笺 </title>
                <meta name="description" content="柒色墨笺的友情链接"/>
            </Head>

            <Breadcrumb type="friends" />

            <div className="max-w-4xl mx-auto px-2">
                <LinkSection
                    title={config.FRIENDS_PAGE_TITLE}
                    description={config.FRIENDS_PAGE_DESCRIPTION}
                    links={links}
                />
                <hr className="my-8 border-t border-default-200" />
                <LinkSection
                    title={config.BLOG_AGGREGATION_TITLE}
                    description={config.BLOG_AGGREGATION_DESCRIPTION}
                    links={aggregations}
                />
                <hr className="my-8 border-t border-default-200" />
            </div>
            
            {!showComments ? (
                <div className="text-center">
                    <button
                        onClick={() => setShowComments(true)}
                        className="custom-btn btn-7 "
                    >
                        <span>加载评论</span>
                        
                    </button>
                </div>
            ) : (
                <Giscus
                    repo={giscusConfig.repo as `${string}/${string}`}
                    repoId={giscusConfig.repoId}
                    category={giscusConfig.category}
                    categoryId={giscusConfig.categoryId}
                    mapping={giscusConfig.mapping as any}
                    lang={giscusConfig.lang}
                    strict="0"
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="bottom"
                    theme="light"
                />
            )}

        </Layout>
    );
};

export default Friends;