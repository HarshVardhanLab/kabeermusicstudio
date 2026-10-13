"use client";

import { useMemo, useState } from "react";
import { videos } from "@/lib/site-data";
import { useLanguage } from "@/components/language-provider";

const categories = ["All", ...Array.from(new Set(videos.map(video => video.category)))];

export default function VideoCatalog() {
  const { t } = useLanguage();
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => videos.filter(video =>
      (category === "All" || video.category === category) &&
      `${video.title} ${video.singer} ${video.category}`.toLowerCase().includes(query.toLowerCase())
    ),
    [category, query]
  );

  return (
    <div className="video-catalog">
      <div className="catalog-controls">
        <label className="search-field">
          <span className="sr-only">{t("Search videos")}</span>
          <span className="icon" aria-hidden="true">search</span>
          <input
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder={t("Search performances")}
          />
        </label>
        <div className="filter-list" aria-label={t("Filter videos by category")}>
          {categories.map(item => (
            <button
              type="button"
              key={item}
              className={category === item ? "active" : ""}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item === "All" ? t("All") : item}
            </button>
          ))}
        </div>
      </div>
      <div className="catalog-grid">
        {filtered.map(video => (
          <a
            className="catalog-card"
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noreferrer"
            key={video.id}
          >
            <span
              className="catalog-thumb"
              style={{ backgroundImage: `linear-gradient(0deg,#20191688,transparent 70%),url(https://img.youtube.com/vi/${video.id}/hqdefault.jpg)` }}
            >
              <span className="play-button"><span className="icon icon-filled" aria-hidden="true">play_arrow</span></span>
              <small>{video.category}</small>
            </span>
            <span className="catalog-copy">
              <small>{video.singer} · {video.subtitle}</small>
              <strong>{video.title}</strong>
              <span>{t("Watch on YouTube")} <span className="icon" aria-hidden="true">north_east</span></span>
            </span>
          </a>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="empty-state">{t("No selected videos match that search. Try another title or category.")}</p>
      )}
      <p className="availability-note">
        {t("This curated preview links to videos published on the channel.")}{" "}
        <a href="https://www.youtube.com/@Bhajankirtansonotek" target="_blank" rel="noreferrer">
          {t("Browse the full channel")} <span className="icon icon-sm" aria-hidden="true">north_east</span>
        </a>
      </p>
    </div>
  );
}
