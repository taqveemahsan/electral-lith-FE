import { ArticleCard } from "./article-card";

export function AllArticles() {
    const articles = [
        {
            title: "ElectraLith's 2022 sustainability report",
            description:
                "Our latest report details our environmental impact, progress, and future goals",
            imageUrl: "/placeholder.svg?height=300&width=400",
            href: "/articles/report-2022",
        },
        {
            title: "A closer look at our renewable energy usage",
            description:
                "We're committed to using renewable energy in our operations. Learn more about our efforts and progress",
            imageUrl: "/placeholder.svg?height=300&width=400",
            href: "/articles/renewable-energy",
        },
        {
            title: "Reducing water usage in our lithium production",
            description:
                "Discover the innovative methods we're working to minimize our usage in the lithium production process",
            imageUrl: "/placeholder.svg?height=300&width=400",
            href: "/articles/water-usage",
        },
    ];

    return (
        <section className="py-12">
            <div className="container">
                <h2 className="mb-8 text-2xl font-bold">All sustainability articles</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <ArticleCard key={article.href} {...article} />
                    ))}
                </div>
            </div>
        </section>
    );
}
