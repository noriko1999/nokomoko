export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">🏢</div>
            <span className="text-2xl font-bold text-blue-600">トヨカゼ</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">会社概要</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">事業内容</a>
            <a href="#team" className="text-gray-600 hover:text-blue-600 transition-colors">チーム</a>
            <a href="#careers" className="text-gray-600 hover:text-blue-600 transition-colors">採用情報</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">お問い合わせ</a>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors">
            にゃおしすアプリ
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            猫好きが集まる
            <span className="text-blue-500">特別な場所</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            株式会社トヨカゼは、猫好きのためのSNS「にゃおしす」を運営し、<br />
            全国の猫愛好家が繋がる温かいコミュニティを提供しています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
              🐾 にゃおしすを見る
            </button>
            <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              会社資料をダウンロード
            </button>
          </div>
        </div>
        
        {/* Hero Image Placeholder */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏢💻🐱</div>
                <p className="text-gray-600">トヨカゼのオフィス風景</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">会社概要</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              株式会社トヨカゼは、猫好きが集まるSNS「にゃおしす」の運営を通じて、<br />
              全国の猫愛好家の皆様に温かいコミュニティを提供しています。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                🎯 私たちのミッション
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">猫愛好家のためのSNS運営</h4>
                    <p className="text-gray-600">「にゃおしす」を通じて、猫好きの皆様が安心して交流できる場を提供します。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">温かいコミュニティ形成</h4>
                    <p className="text-gray-600">猫との生活の喜びを分かち合い、困った時には助け合える関係を大切にします。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">継続的なサービス改善</h4>
                    <p className="text-gray-600">ユーザーの声に耳を傾け、より使いやすく楽しいアプリへと進化し続けます。</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🏢💡</div>
                <p className="text-gray-600 font-medium">イノベーションオフィス</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">事業内容</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              猫好きが集まるSNS「にゃおしす」の運営・開発
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-5xl mb-4 text-center">📱</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">にゃおしすアプリ開発</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                猫好きのためのSNSアプリ「にゃおしす」の企画・開発・運営を行っています。iOS/Android対応。
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-5xl mb-4 text-center">🐱</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">コミュニティ運営</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                50,000人以上の猫好きユーザーが集まるコミュニティの健全な運営とサポート業務。
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-5xl mb-4 text-center">📸</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">コンテンツ管理</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                ユーザーが投稿する猫の写真・動画の品質管理とコンテンツモデレーション。
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-5xl mb-4 text-center">💬</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">ユーザーサポート</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                アプリの使い方から猫の相談まで、ユーザーの質問に丁寧にお答えするサポート業務。
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-5xl mb-4 text-center">🎉</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">イベント企画</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                猫の写真コンテストやオフライン交流会など、ユーザー同士を繋げるイベントの企画・運営。
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-5xl mb-4 text-center">📊</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">データ分析・改善</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                ユーザーの利用傾向を分析し、より使いやすく楽しいアプリへの継続的な改善。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">チーム紹介</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ペットテック革新を牽引する多様なバックグラウンドを持つプロフェッショナルチーム
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl">👨‍💼</div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">田中 太郎</h4>
                  <p className="text-sm text-gray-600">代表取締役CEO</p>
                </div>
              </div>
              <div className="flex mb-3">
                <span className="text-blue-500 text-sm">🎓 東京大学工学部卒</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                元大手IT企業のエンジニア。ペット業界のDX推進に情熱を注ぎ、テクノロジーでペットと人の関係を革新することを目指しています。
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl">👩‍💻</div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">佐藤 花子</h4>
                  <p className="text-sm text-gray-600">CTO</p>
                </div>
              </div>
              <div className="flex mb-3">
                <span className="text-blue-500 text-sm">🏆 AI専門家・博士号</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                機械学習とデータサイエンスの専門家。ペットの行動分析や健康予測AIの開発をリードし、技術革新の最前線で活躍しています。
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl">🎨</div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">山田 美咲</h4>
                  <p className="text-sm text-gray-600">デザインディレクター</p>
                </div>
              </div>
              <div className="flex mb-3">
                <span className="text-blue-500 text-sm">✨ UX/UIスペシャリスト</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                ユーザー中心設計の思想を持ち、直感的で使いやすいアプリデザインを追求。ペット愛好家の心に響くサービス体験の創造を担当しています。
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-6 bg-blue-100 rounded-2xl px-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <p className="text-sm text-gray-600">チームメンバー</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5</div>
                <p className="text-sm text-gray-600">年間の開発経験</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <p className="text-sm text-gray-600">専門領域</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-gradient-to-r from-blue-500 to-indigo-500">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              一緒に未来を創ろう！
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              ペットテック業界のパイオニアとして、<br />
              革新的なサービスを一緒に開発していただける仲間を募集しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-blue-500 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
                💼 採用情報を見る
              </button>
              <button className="bg-white text-blue-500 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
                📄 会社資料をダウンロード
              </button>
            </div>
            <p className="text-blue-100 text-sm">
              エンジニア・デザイナー・マーケター積極採用中
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">お問い合わせ</h2>
              <p className="text-xl text-gray-600">
                ご質問やご意見がございましたら、お気軽にお問い合わせください
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">株式会社トヨカゼ</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-orange-500 text-xl">📍</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">本社所在地</h4>
                      <p className="text-gray-600">東京都渋谷区猫町1-2-3<br />ニャンニャンビル5F</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-orange-500 text-xl">📞</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">お電話</h4>
                      <p className="text-gray-600">03-1234-5678<br />（平日 10:00-18:00）</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-orange-500 text-xl">✉️</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">メール</h4>
                      <p className="text-gray-600">info@toyokaze.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">お問い合わせフォーム</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">お名前</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="山田太郎" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">お問い合わせ内容</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="お問い合わせ内容をご記入ください"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    送信する
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🏢</div>
                <span className="text-xl font-bold text-blue-400">トヨカゼ</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                猫好きのためのSNS「にゃおしす」を運営し、全国の猫愛好家が繋がる温かいコミュニティを提供する企業です。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">会社情報</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">会社概要</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">事業内容</a></li>
                <li><a href="#team" className="hover:text-blue-400 transition-colors">チーム</a></li>
                <li><a href="#careers" className="hover:text-blue-400 transition-colors">採用情報</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">法的情報</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">利用規約</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">特定商取引法</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">投資家情報</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">フォローする</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl">📘</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl">🐦</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl">📷</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl">🔗</a>
              </div>
              <div className="mt-6">
                <h5 className="font-semibold mb-2">プロダクト</h5>
                <div className="space-y-2">
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors w-full">
                    🐱 にゃおしすアプリ
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors w-full">
                    📧 ニュースレター
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 株式会社トヨカゼ. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-2 md:mt-0">
                Building the future of Pet-Tech 🐾
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
