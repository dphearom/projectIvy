"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import {
  ARTICLES_PER_PAGE,
  NEWS_ARTICLES,
  NEWS_CATEGORIES,
  type NewsCategory,
} from "@/lib/news";

const NewsTrends = () => {
  const [category, setCategory] = useState<NewsCategory>("study-abroad-trends");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => NEWS_ARTICLES.filter((article) => article.category === category),
    [category]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / ARTICLES_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const shown = filtered.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  const selectCategory = (id: NewsCategory) => {
    setCategory(id);
    setPage(1);
  };

  return (
    <section className="news-trends">
      <div className="wrap news-trends-layout">
        <aside className="news-categories" aria-label="Categories">
          <h2>Categories</h2>
          <ul className="news-tab-list" role="tablist">
            {NEWS_CATEGORIES.map(({ id, label }) => {
              const active = category === id;
              return (
                <li key={id} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active}
                    className={`news-tab${active ? " active" : ""}`}
                    onClick={() => selectCategory(id)}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="news-main">
          <div className="news-articles">
            {shown.length === 0 ? (
              <p className="news-empty">No articles in this category yet — check back soon.</p>
            ) : (
              shown.map((article, i) => (
                <article
                  className="news-article"
                  key={article.slug}
                  data-reveal
                  data-reveal-d={String((i % 2) + 1)}
                >
                  <Link href={`/news#${article.slug}`} className="news-article-link">
                    <div className="news-article-img">
                      <PlaceholderImage label="Article image" aspect="16 / 10" />
                    </div>
                    <div className="news-article-body">
                      <h3>{article.title}</h3>
                      <p>{article.excerpt}</p>
                      <span className="news-article-go">
                        See details <span className="arrow">→</span>
                      </span>
                    </div>
                  </Link>
                </article>
              ))
            )}
          </div>

          {totalPages > 1 && (
            <nav className="news-pagination" aria-label="Pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`news-page${currentPage === n ? " active" : ""}`}
                  aria-current={currentPage === n ? "page" : undefined}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsTrends;
