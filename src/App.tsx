import React, { useState, useEffect } from 'react';
import HeaderNavbar from './components/HeaderNavbar';
import EditorialDrawer from './components/EditorialDrawer';
import HeroCover from './components/HeroCover';
import MarqueeBanner from './components/MarqueeBanner';
import AsymmetricGrid from './components/AsymmetricGrid';
import ParallaxQuoteSection from './components/ParallaxQuoteSection';
import CultureDeepDive from './components/CultureDeepDive';
import PhotoEssayCarousel from './components/PhotoEssayCarousel';
import IssueArchives from './components/IssueArchives';
import ArticleModal from './components/ArticleModal';
import NewsletterSubscription from './components/NewsletterSubscription';
import FooterEditorial from './components/FooterEditorial';

import { ARTICLES, CURRENT_ISSUE, ARCHIVED_ISSUES, PHOTO_ESSAYS } from './data/magazineData';
import { Article, Issue } from './types';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeIssue, setActiveIssue] = useState<Issue>(CURRENT_ISSUE);
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(['synthetic-renaissance']);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [audioNotification, setAudioNotification] = useState<string | null>(null);

  // Audio Toggle Simulation
  const handleToggleAudio = () => {
    setIsAudioPlaying((prev) => {
      const nextState = !prev;
      setAudioNotification(nextState ? 'Playing Audio Narration (AURA Issue No. 42)' : 'Audio Paused');
      setTimeout(() => setAudioNotification(null), 3000);
      return nextState;
    });
  };

  // Bookmark Toggle
  const handleToggleSave = (articleId: string) => {
    setSavedArticleIds((prev) =>
      prev.includes(articleId) ? prev.filter((id) => id !== articleId) : [...prev, articleId]
    );
  };

  // Featured Article
  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const deepDiveArticle = ARTICLES.find((a) => a.category === 'Culture') || ARTICLES[1];

  return (
    <div className="min-h-screen bg-[#FFF1F2] text-[#1C1917] font-sans antialiased selection:bg-[#F43F5E] selection:text-white relative">
      
      {/* Paper grain overlay for tactile magazine texture */}
      <div className="fixed inset-0 paper-grain pointer-events-none z-0" />

      {/* Floating Audio Toast Notification */}
      {audioNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1C1917] text-white px-5 py-3 rounded-full border border-[#F43F5E] shadow-2xl flex items-center gap-3 text-xs font-mono animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#F43F5E] animate-ping" />
          <span>{audioNotification}</span>
        </div>
      )}

      {/* Header Bar - Hamburger Menu ONLY */}
      <HeaderNavbar
        onOpenDrawer={() => setIsDrawerOpen(true)}
        savedArticlesCount={savedArticleIds.length}
        onOpenBookmarks={() => {
          setSelectedCategory('Semua');
          const el = document.querySelector('#asymmetric-grid');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
        currentIssueTitle={activeIssue.title}
      />

      {/* Full-Screen Magazine Drawer (Triggered by Hamburger) */}
      <EditorialDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        articles={ARTICLES}
        archivedIssues={ARCHIVED_ISSUES}
        currentCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onSelectArticle={(art) => setSelectedArticle(art)}
        onSelectIssue={(iss) => setActiveIssue(iss)}
        onToggleAudio={handleToggleAudio}
        isAudioPlaying={isAudioPlaying}
      />

      {/* Main Content Area */}
      <main className="relative z-10 space-y-0">
        
        {/* Hero Cover Story */}
        <HeroCover
          article={featuredArticle}
          onReadArticle={(art) => setSelectedArticle(art)}
          onToggleAudio={handleToggleAudio}
          isAudioPlaying={isAudioPlaying}
          isSaved={savedArticleIds.includes(featuredArticle.id)}
          onToggleSave={handleToggleSave}
        />

        {/* Marquee Ticker */}
        <MarqueeBanner />

        {/* Asymmetric Article Grid */}
        <AsymmetricGrid
          articles={ARTICLES}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onReadArticle={(art) => setSelectedArticle(art)}
          savedArticleIds={savedArticleIds}
          onToggleSave={handleToggleSave}
        />

        {/* Parallax Quote Banner */}
        <ParallaxQuoteSection />

        {/* Culture & Editor's Note Deep Dive */}
        <CultureDeepDive
          article={deepDiveArticle}
          onReadArticle={(art) => setSelectedArticle(art)}
          onToggleAudio={handleToggleAudio}
          isAudioPlaying={isAudioPlaying}
        />

        {/* Photo Essay Gallery */}
        <PhotoEssayCarousel essays={PHOTO_ESSAYS} />

        {/* Issue Archives Switcher */}
        <IssueArchives
          issues={ARCHIVED_ISSUES}
          currentIssue={activeIssue}
          onSelectIssue={(iss) => setActiveIssue(iss)}
        />

        {/* Newsletter Dispatch */}
        <NewsletterSubscription />

      </main>

      {/* Footer Colophon */}
      <FooterEditorial />

      {/* Interactive Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        isSaved={selectedArticle ? savedArticleIds.includes(selectedArticle.id) : false}
        onToggleSave={handleToggleSave}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
        allArticles={ARTICLES}
        onSelectRelatedArticle={(art) => setSelectedArticle(art)}
      />

    </div>
  );
}
