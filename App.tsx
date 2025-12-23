import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetroIndex } from './components/MetroIndex';
import { ExpertAnalysis } from './components/ExpertAnalysis';
import { ConsultationForm } from './components/ConsultationForm';
import { MarketDataSection } from './components/MarketDataSection';
import { Footer } from './components/Footer';
import { ZaloButton } from './components/ZaloButton';
import { ArticleDetail } from './components/ArticleDetail';
import { ProjectDetail } from './components/ProjectDetail';
import { AnalysisArticle, MetroProject } from './types';

type TabView = 'DASHBOARD' | 'REPORTS' | 'DATA';

function App() {
  const [currentView, setCurrentView] = useState<TabView>('DASHBOARD');
  const [selectedArticle, setSelectedArticle] = useState<AnalysisArticle | null>(null);
  const [selectedProject, setSelectedProject] = useState<MetroProject | null>(null);

  const handleArticleClick = (article: AnalysisArticle) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  const handleProjectClick = (project: MetroProject) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  }

  const handleBackToHome = () => {
    setSelectedArticle(null);
    setSelectedProject(null);
  };

  const renderContent = () => {
    // 1. Show Project Detail if selected
    if (selectedProject) {
        return <ProjectDetail project={selectedProject} onBack={handleBackToHome} />;
    }

    // 2. Show Article Detail if selected
    if (selectedArticle) {
      return <ArticleDetail article={selectedArticle} onBack={handleBackToHome} />;
    }

    // 3. Show Main Tabs
    switch (currentView) {
      case 'REPORTS':
        return (
          <div className="py-10 min-h-screen bg-[#F8FAFC]">
             <div className="max-w-7xl mx-auto px-4 mb-8">
                <div className="flex items-center space-x-2 text-[#B45309] font-bold text-xs uppercase tracking-widest mb-2">
                    <span className="w-8 h-[1px] bg-[#B45309]"></span>
                    <span>Intelligence Unit</span>
                </div>
                <h2 className="serif-font text-3xl font-bold text-[#1A2B48]">Thư Viện Báo Cáo</h2>
                <p className="text-gray-600 mt-2">Tổng hợp các bài phân tích chuyên sâu (Deep Dive) và điều tra độc lập.</p>
             </div>
             <ExpertAnalysis onArticleClick={handleArticleClick} />
          </div>
        );
      case 'DATA':
        return (
            <div className="py-10 min-h-screen bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 mb-8">
                    <div className="flex items-center space-x-2 text-[#B45309] font-bold text-xs uppercase tracking-widest mb-2">
                        <span className="w-8 h-[1px] bg-[#B45309]"></span>
                        <span>Real-time Analytics</span>
                    </div>
                    <h2 className="serif-font text-3xl font-bold text-[#1A2B48]">Dữ Liệu Thị Trường</h2>
                    <p className="text-gray-600 mt-2">Bảng giá, pháp lý và chỉ số tín nhiệm dự án (Credit Rating).</p>
                </div>
                <MarketDataSection />
                <MetroIndex onProjectClick={handleProjectClick} />
            </div>
        );
      case 'DASHBOARD':
      default:
        return (
          <>
            <Hero />
            <MarketDataSection />
            <MetroIndex onProjectClick={handleProjectClick} />
            <ExpertAnalysis onArticleClick={handleArticleClick} />
            <ConsultationForm />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>
      
      <Footer />
      <ZaloButton />
    </div>
  );
}

export default App;