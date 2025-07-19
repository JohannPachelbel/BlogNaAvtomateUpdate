import './App.css'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Users, Target, Clock, Award, CheckCircle, Star, MessageSquare, Send, Zap, TrendingUp, Sparkles, Rocket } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './components/ui/collapsible'
import heroIllustration from './assets/hero-illustration.png'
import automationIcon from './assets/automation-icon.png'
import contentCreation from './assets/content-creation.png'
import resultsGraphic from './assets/results-graphic.png'

function App() {
  const [openModules, setOpenModules] = useState({})

  const toggleModule = (moduleId) => {
    setOpenModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }))
  }

  const modules = [
    {
      id: 1,
      title: "Темы и сценарии: генерация, упаковка, ИИ-ассистенты",
      content: "Определение ниши, генерация идей, создание контент-плана. Написание постов в автоматическом режиме. Адаптация текстов под короткие видео.",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Нейрофотосессии на телефоне: создание, обработка",
      content: "Перевод промптов на английский. Создание базового изображения в Kling и ChatGPT. Пересадка лица, цветокоррекция и апскейл.",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Видео: сценарий, съемка, оборудование, запись с первого дубля",
      content: "Обзор оборудования. Работа с суфлёром. Съёмка видео с использованием Open Camera и петличного микрофона.",
      color: "from-pink-500 to-red-600"
    },
    {
      id: 4,
      title: "Мобильный монтаж: InShot, музыка, субтитры",
      content: "Монтаж в InShot. Создание и редактирование субтитров. Экспорт видео без водяного знака.",
      color: "from-red-500 to-orange-600"
    },
    {
      id: 5,
      title: "Публикация: автоматизация постинга, оформление и описание",
      content: "Подготовка постов и видео для публикации. Создание отложенных постов в социальных сетях.",
      color: "from-orange-500 to-yellow-600"
    },
    {
      id: 6,
      title: "Нейрфото и графический дизайн на ПК: Recraft, Krea, Fooocus",
      content: "Работа в Recraft, Kling, Dreamina. Удаление водяных знаков. Пересадка лица в Deep Swapper. Доработка в Fooocus.",
      color: "from-yellow-500 to-green-600"
    },
    {
      id: 7,
      title: "Продвинутый звук и CapCut (версия для ПК)",
      content: "Запись звука на внешний микрофон. Постобработка в Adobe Audition. Монтаж в CapCut на компьютере.",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 8,
      title: "Итоги + настройка личных ИИ-Ассистентов",
      content: "Подведение итогов. Создание ассистентов под любые задачи. Планирование дальнейшего развития.",
      color: "from-teal-500 to-blue-600"
    }
  ]

  const testimonials = [
    {
      name: "Марина Заливная",
      text: "Это был отличный выбор для меня и будет отличным выбором для тех, кто хочет погрузиться в мир искусственного интеллекта и понять, как работают современные технологии. Узнала для себя очень много нового. Большое вам спасибо!",
      avatar: "М"
    },
    {
      name: "Андрей Варфоломеев",
      text: "Просто, понятно и невероятно впечатляюще. Вы открыли мне мир ИИ. Оказывается достаточно настроить комп, написать пару фраз, накопипастить, а ИИ сам все сделает.",
      avatar: "А"
    },
    {
      name: "Николай Некрасов",
      text: "Рекомендую к покупке. Этот курс научит Вас создавать свой контент с использованием возможностей ИИ и это позволит Вам реализовать любые Ваши фантазии",
      avatar: "Н"
    }
  ]

  const pricingPlans = [
    {
      name: "Базовый",
      originalPrice: "8 000 ₽",
      discountPrice: "5 000 ₽",
      features: ["Видеоуроки", "Чат поддержки", "Доступ навсегда"],
      gradient: "from-slate-600 to-slate-700"
    },
    {
      name: "Продвинутый",
      originalPrice: "15 000 ₽",
      discountPrice: "10 000 ₽",
      features: ["Всё из базового", "Разборы работ", "Бонус-курс \"Нейропикс\""],
      popular: true,
      gradient: "from-blue-600 to-purple-600"
    },
    {
      name: "VIP",
      originalPrice: "30 000 ₽",
      discountPrice: "20 000 ₽",
      features: ["Всё из продвинутого", "Личный разбор", "Упаковка профиля", "5 индивидуальных созвонов"],
      gradient: "from-purple-600 to-pink-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-white font-medium">Автоматизация контента</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                «Блог на автомате» — твой отдел продаж и команда маркетинга
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                Получай заявки и новых клиентов благодаря системному контенту без найма и рутины — твой блог работает за тебя, даже когда ты занят бизнесом.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl font-semibold"
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Записаться на курс
              </Button>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroIllustration} 
                  alt="Автоматизация блога" 
                  className="w-full max-w-lg mx-auto drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-3xl blur-3xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-600 rounded-full px-4 py-2 mb-4">
              <Zap className="w-5 h-5 mr-2" />
              <span className="font-medium">Болевые точки</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Главные боли
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { text: "Блог не привлекает клиентов — не знаешь, что и когда публиковать?", icon: "😤", color: "border-red-200 bg-red-50" },
              { text: "Нет времени и сил вести соцсети самому?", icon: "😴", color: "border-orange-200 bg-orange-50" },
              { text: "Устал платить подрядчикам или объяснять своё видение чужой команде?", icon: "💸", color: "border-yellow-200 bg-yellow-50" },
              { text: "Хотел бы переключить свой блог на автопилот и заняться стратегией?", icon: "🤔", color: "border-blue-200 bg-blue-50" }
            ].map((pain, index) => (
              <Card key={index} className={`${pain.color} border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{pain.icon}</div>
                  <p className="text-slate-700 text-lg leading-relaxed font-medium">{pain.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
              <p className="text-xl font-semibold">
                Этот курс заменит копирайтера, дизайнера и маркетолога — и сэкономит десятки часов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-200/30 rounded-full blur-xl"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
              <Target className="w-5 h-5 mr-2" />
              <span className="font-medium">Целевая аудитория</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Кому это подходит
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Эксперты и предприниматели", gradient: "from-blue-500 to-cyan-500" },
              { icon: Target, title: "Блогеры", gradient: "from-purple-500 to-pink-500" },
              { icon: MessageSquare, title: "Консультанты/коучи", gradient: "from-green-500 to-teal-500" },
              { icon: Award, title: "Все, кто хочет результат", gradient: "from-orange-500 to-red-500" }
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-green-100 text-green-600 rounded-full px-4 py-2 mb-6">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Преимущества</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
                Что получит студент
              </h2>
              <div className="space-y-6">
                {[
                  "Автоматизированный блог: публикации по расписанию без ручной рутины",
                  "Отдел контент-маркетинга \"под ключ\" без найма сотрудников",
                  "Экономию времени: до 30 часов в месяц",
                  "Системный, продающий контент — под твой стиль и цели бизнеса"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-slate-700 text-lg leading-relaxed font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={automationIcon} 
                alt="Автоматизация" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-3xl blur-3xl transform -rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-medium">Обучающая программа</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Программа курса
            </h2>
            <p className="text-white/80 text-lg">1–2 месяца, 8 модулей</p>
          </div>
          <div className="space-y-4">
            {modules.map((module) => (
              <Collapsible key={module.id} open={openModules[module.id]} onOpenChange={() => toggleModule(module.id)}>
                <CollapsibleTrigger asChild>
                  <Card className="cursor-pointer bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] group">
                    <CardHeader className="flex flex-row items-center justify-between p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {module.id}
                        </div>
                        <h3 className="text-lg font-semibold text-white text-left group-hover:text-yellow-300 transition-colors duration-300">{module.title}</h3>
                      </div>
                      <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors duration-300">
                        {openModules[module.id] ? 
                          <ChevronUp className="w-5 h-5 text-white" /> : 
                          <ChevronDown className="w-5 h-5 text-white" />
                        }
                      </div>
                    </CardHeader>
                  </Card>
                </CollapsibleTrigger>
                <CollapsibleContent className="transition-all duration-500">
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 mt-2">
                    <CardContent className="p-6">
                      <p className="text-white/90 leading-relaxed">{module.content}</p>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-600 rounded-full px-4 py-2 mb-4">
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-medium">Процесс обучения</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Как проходит обучение
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { text: "Чат поддержки и разборы работ", icon: MessageSquare, color: "from-blue-500 to-cyan-500" },
              { text: "Домашние задания: учишься на своих темах и проектах", icon: Target, color: "from-purple-500 to-pink-500" },
              { text: "Вечный доступ ко всем материалам", icon: Clock, color: "from-green-500 to-teal-500" },
              { text: "Проходишь в своём темпе или по расписанию", icon: Zap, color: "from-orange-500 to-red-500" }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-teal-50 relative">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-teal-200/30 rounded-full blur-xl"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={resultsGraphic} 
                alt="Результаты" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-3xl blur-3xl transform rotate-6"></div>
            </div>
            <div>
              <div className="inline-flex items-center bg-green-100 text-green-600 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span className="font-medium">Ваши достижения</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
                Результаты
              </h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Ты создашь:</h3>
              <div className="space-y-6">
                {[
                  "Минимум 3 системных поста под свою нишу",
                  "3 коротких видео с субтитрами и обработкой",
                  "3 яркие нейрофото и обложки для видео",
                  "Рабочий контент-план на месяц с креативными идеями",
                  "Всё своими руками — без команды и подрядчиков"
                ].map((result, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-slate-700 text-lg leading-relaxed font-medium">{result}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl shadow-xl">
                <p className="text-lg font-semibold">
                  Будет не просто портфолио, а полностью готовый коммерческий блог — для себя или для клиента.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-600 rounded-full px-4 py-2 mb-4">
              <Star className="w-5 h-5 mr-2" />
              <span className="font-medium">Отзывы учеников</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Отзывы
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <p className="font-semibold text-slate-800">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-medium">Выберите тариф</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Тарифы
            </h2>
            <p className="text-white/80 text-lg">Специальные цены для первых 10 учеников</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-4 group overflow-hidden ${plan.popular ? 'ring-2 ring-yellow-400 relative scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      🔥 Популярный
                    </span>
                  </div>
                )}
                <div className={`h-2 bg-gradient-to-r ${plan.gradient}`}></div>
                <CardHeader className="text-center p-8">
                  <CardTitle className="text-2xl font-bold text-white mb-4">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{plan.discountPrice}</span>
                    <span className="text-lg text-white/60 line-through ml-2">{plan.originalPrice}</span>
                  </div>
                  <p className="text-sm text-white/80">Для первых 10 учеников</p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.gradient} hover:scale-105 text-white transition-all duration-300 py-3 font-semibold shadow-lg`}
                    onClick={() => document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-6">
            <Send className="w-5 h-5 mr-2" />
            <span className="font-medium">Связаться с нами</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
            Записаться
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-6 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-semibold"
              onClick={() => window.open('https://t.me/tolgsky', '_blank')}
            >
              <Send className="w-6 h-6 mr-3" />
              Telegram
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-semibold"
              onClick={() => window.open('https://vk.com/tolgsky', '_blank')}
            >
              <MessageSquare className="w-6 h-6 mr-3" />
              VKontakte
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white py-6 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-semibold"
              onClick={() => window.open('https://wa.me/79062800393', '_blank')}
            >
              <MessageSquare className="w-6 h-6 mr-3" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Rocket className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-white font-medium">Финальный призыв</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Контент работает на продажи — без выгорания и найма команды
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-xl mb-4">Освободишь десятки часов для ключевых задач бизнеса</p>
              <p className="text-xl">Результат — поток клиентов, а не просто публикации</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-xl mb-4">Всё под контролем: твой голос, твой бизнес, твой стиль</p>
              <p className="text-xl">Твоя стратегия, полная автоматизация</p>
            </div>
          </div>
          <p className="text-2xl font-semibold mb-8">
            Готовы включить блог на автопилот? Заполните заявку и получите доступ к курсу!
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-12 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl font-bold"
            onClick={() => window.open('https://t.me/tolgsky', '_blank')}
          >
            <Rocket className="w-6 h-6 mr-3" />
            Связаться в Telegram
          </Button>
        </div>
      </section>
    </div>
  )
}

export default App

