import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Character {
  id: number;
  name: string;
  role: string;
  health: number;
  damage: number;
  speed: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  ability: string;
  emoji: string;
}

interface GameMode {
  id: number;
  name: string;
  type: string;
  players: string;
  description: string;
  icon: string;
}

interface LeaderPlayer {
  id: number;
  name: string;
  rank: number;
  trophies: number;
  wins: number;
  avatar: string;
}

export default function Index() {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<'home' | 'heroes' | 'modes' | 'shop' | 'profile' | 'leaderboard'>('home');

  const characters: Character[] = [
    {
      id: 1,
      name: 'Shadow',
      role: 'Снайпер',
      health: 75,
      damage: 95,
      speed: 70,
      rarity: 'legendary',
      ability: 'Невидимость на 3 секунды',
      emoji: '🎯'
    },
    {
      id: 2,
      name: 'Tank',
      role: 'Танк',
      health: 100,
      damage: 60,
      speed: 40,
      rarity: 'epic',
      ability: 'Щит поглощает 50% урона',
      emoji: '🛡️'
    },
    {
      id: 3,
      name: 'Blaze',
      role: 'Штурмовик',
      health: 85,
      damage: 80,
      speed: 85,
      rarity: 'rare',
      ability: 'Огненный выстрел',
      emoji: '🔥'
    },
    {
      id: 4,
      name: 'Medic',
      role: 'Поддержка',
      health: 70,
      damage: 50,
      speed: 75,
      rarity: 'epic',
      ability: 'Лечение союзников',
      emoji: '💉'
    },
    {
      id: 5,
      name: 'Ninja',
      role: 'Разведчик',
      health: 65,
      damage: 75,
      speed: 95,
      rarity: 'legendary',
      ability: 'Двойной прыжок',
      emoji: '⚡'
    },
    {
      id: 6,
      name: 'Bomber',
      role: 'Подрывник',
      health: 80,
      damage: 90,
      speed: 60,
      rarity: 'rare',
      ability: 'Взрывные гранаты',
      emoji: '💣'
    }
  ];

  const gameModes: GameMode[] = [
    {
      id: 1,
      name: 'Командный бой',
      type: '3v3',
      players: '6 игроков',
      description: 'Классический режим 3 на 3. Команда с наибольшим количеством убийств побеждает.',
      icon: 'Users'
    },
    {
      id: 2,
      name: 'Эпичная битва',
      type: '5v5',
      players: '10 игроков',
      description: 'Масштабное сражение 5 на 5 с захватом точек и респауном.',
      icon: 'Swords'
    },
    {
      id: 3,
      name: 'Соло выживание',
      type: 'Solo',
      players: '10 игроков',
      description: 'Каждый сам за себя. Последний выживший получает трофеи.',
      icon: 'Target'
    },
    {
      id: 4,
      name: 'Захват флага',
      type: '3v3',
      players: '6 игроков',
      description: 'Захватите флаг противника и принесите на свою базу.',
      icon: 'Flag'
    }
  ];

  const leaderboard: LeaderPlayer[] = [
    { id: 1, name: 'ProGamer2025', rank: 1, trophies: 15420, wins: 892, avatar: '👑' },
    { id: 2, name: 'ShadowHunter', rank: 2, trophies: 14850, wins: 845, avatar: '🎯' },
    { id: 3, name: 'FireStorm', rank: 3, trophies: 14200, wins: 801, avatar: '🔥' },
    { id: 4, name: 'IceKing', rank: 4, trophies: 13900, wins: 782, avatar: '❄️' },
    { id: 5, name: 'NightWolf', rank: 5, trophies: 13500, wins: 765, avatar: '🐺' },
    { id: 6, name: 'ThunderBolt', rank: 6, trophies: 13200, wins: 748, avatar: '⚡' },
    { id: 7, name: 'DragonSlayer', rank: 7, trophies: 12850, wins: 721, avatar: '🐉' },
    { id: 8, name: 'PhantomBlade', rank: 8, trophies: 12400, wins: 698, avatar: '⚔️' }
  ];

  const rarityColors = {
    common: 'bg-gray-500',
    rare: 'bg-blue-500',
    epic: 'bg-purple-500',
    legendary: 'bg-orange-500'
  };

  const rarityLabels = {
    common: 'Обычный',
    rare: 'Редкий',
    epic: 'Эпический',
    legendary: 'Легендарный'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {activeSection === 'home' && (
        <div className="animate-fade-in">
          <div className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(155,135,245,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(155,135,245,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
              <div className="mb-8 animate-scale-in">
                <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent mb-4">
                  ARENA WARS
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Реалистичные сражения. Мультяшные герои. Бесконечный экшн.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-lg px-8 py-6 hover-scale"
                  onClick={() => setActiveSection('modes')}
                >
                  <Icon name="Play" className="mr-2" size={24} />
                  Начать игру
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 hover-scale"
                  onClick={() => setActiveSection('heroes')}
                >
                  <Icon name="User" className="mr-2" size={24} />
                  Персонажи
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                <Card className="bg-slate-800/50 border-slate-700 p-6 hover-scale cursor-pointer" onClick={() => setActiveSection('heroes')}>
                  <Icon name="Users" className="mx-auto mb-2 text-primary" size={32} />
                  <h3 className="font-bold text-lg">Герои</h3>
                  <p className="text-gray-400 text-sm">6+ персонажей</p>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700 p-6 hover-scale cursor-pointer" onClick={() => setActiveSection('modes')}>
                  <Icon name="Gamepad2" className="mx-auto mb-2 text-orange-500" size={32} />
                  <h3 className="font-bold text-lg">Режимы</h3>
                  <p className="text-gray-400 text-sm">4 режима боя</p>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700 p-6 hover-scale cursor-pointer" onClick={() => setActiveSection('shop')}>
                  <Icon name="ShoppingBag" className="mx-auto mb-2 text-blue-500" size={32} />
                  <h3 className="font-bold text-lg">Магазин</h3>
                  <p className="text-gray-400 text-sm">Скины и улучшения</p>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700 p-6 hover-scale cursor-pointer" onClick={() => setActiveSection('leaderboard')}>
                  <Icon name="Trophy" className="mx-auto mb-2 text-yellow-500" size={32} />
                  <h3 className="font-bold text-lg">Рейтинг</h3>
                  <p className="text-gray-400 text-sm">Таблица лидеров</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'heroes' && (
        <div className="container mx-auto px-4 py-8 animate-fade-in">
          <Button variant="ghost" className="mb-6" onClick={() => setActiveSection('home')}>
            <Icon name="ArrowLeft" className="mr-2" size={20} />
            Назад в меню
          </Button>

          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            Персонажи
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((char) => (
              <Card
                key={char.id}
                className={`bg-slate-800/70 border-2 cursor-pointer transition-all hover-scale ${
                  selectedCharacter === char.id ? 'border-primary shadow-lg shadow-primary/50' : 'border-slate-700'
                }`}
                onClick={() => setSelectedCharacter(char.id)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-6xl">{char.emoji}</div>
                    <Badge className={`${rarityColors[char.rarity]} text-white`}>
                      {rarityLabels[char.rarity]}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-1">{char.name}</h3>
                  <p className="text-gray-400 mb-4">{char.role}</p>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Здоровье</span>
                        <span className="font-bold text-red-400">{char.health}</span>
                      </div>
                      <Progress value={char.health} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Урон</span>
                        <span className="font-bold text-orange-400">{char.damage}</span>
                      </div>
                      <Progress value={char.damage} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Скорость</span>
                        <span className="font-bold text-blue-400">{char.speed}</span>
                      </div>
                      <Progress value={char.speed} className="h-2" />
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-slate-900/50 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <Icon name="Zap" className="inline mr-1" size={16} />
                      {char.ability}
                    </p>
                  </div>

                  {selectedCharacter === char.id && (
                    <Button className="w-full mt-4 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary">
                      <Icon name="Check" className="mr-2" size={20} />
                      Выбран
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'modes' && (
        <div className="container mx-auto px-4 py-8 animate-fade-in">
          <Button variant="ghost" className="mb-6" onClick={() => setActiveSection('home')}>
            <Icon name="ArrowLeft" className="mr-2" size={20} />
            Назад в меню
          </Button>

          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            Режимы игры
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gameModes.map((mode) => (
              <Card key={mode.id} className="bg-slate-800/70 border-slate-700 hover-scale cursor-pointer group">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-primary to-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon name={mode.icon as any} size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold">{mode.name}</h3>
                        <Badge variant="outline" className="border-primary text-primary">
                          {mode.type}
                        </Badge>
                      </div>
                      <p className="text-gray-400 mb-4">{mode.players}</p>
                      <p className="text-gray-300">{mode.description}</p>
                      <Button className="w-full mt-4 bg-primary hover:bg-purple-600">
                        <Icon name="Play" className="mr-2" size={20} />
                        Играть
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'shop' && (
        <div className="container mx-auto px-4 py-8 animate-fade-in">
          <Button variant="ghost" className="mb-6" onClick={() => setActiveSection('home')}>
            <Icon name="ArrowLeft" className="mr-2" size={20} />
            Назад в меню
          </Button>

          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            Магазин
          </h2>

          <Tabs defaultValue="skins" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="skins">Скины</TabsTrigger>
              <TabsTrigger value="upgrades">Улучшения</TabsTrigger>
            </TabsList>

            <TabsContent value="skins" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Ледяной воин', price: 500, emoji: '❄️', rarity: 'epic' },
                  { name: 'Огненный демон', price: 800, emoji: '🔥', rarity: 'legendary' },
                  { name: 'Киберниндзя', price: 300, emoji: '🤖', rarity: 'rare' },
                  { name: 'Космический страж', price: 1000, emoji: '🚀', rarity: 'legendary' },
                  { name: 'Лесной охотник', price: 400, emoji: '🌲', rarity: 'epic' },
                  { name: 'Золотой рыцарь', price: 600, emoji: '👑', rarity: 'epic' }
                ].map((skin, index) => (
                  <Card key={index} className="bg-slate-800/70 border-slate-700 hover-scale cursor-pointer">
                    <div className="p-6">
                      <div className="text-7xl mb-4 text-center">{skin.emoji}</div>
                      <h3 className="text-xl font-bold mb-2 text-center">{skin.name}</h3>
                      <Badge className={`${rarityColors[skin.rarity as keyof typeof rarityColors]} text-white mb-4 w-full justify-center`}>
                        {rarityLabels[skin.rarity as keyof typeof rarityLabels]}
                      </Badge>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Icon name="Coins" className="text-yellow-500" size={20} />
                        <span className="text-2xl font-bold text-yellow-500">{skin.price}</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary">
                        Купить
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upgrades" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Увеличение урона', level: 5, price: 200, icon: 'Zap' },
                  { name: 'Увеличение здоровья', level: 7, price: 250, icon: 'Heart' },
                  { name: 'Ускорение перезарядки', level: 3, price: 150, icon: 'Clock' },
                  { name: 'Увеличение скорости', level: 4, price: 180, icon: 'Wind' }
                ].map((upgrade, index) => (
                  <Card key={index} className="bg-slate-800/70 border-slate-700 hover-scale cursor-pointer">
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                          <Icon name={upgrade.icon as any} size={28} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{upgrade.name}</h3>
                          <p className="text-gray-400 mb-3">Уровень {upgrade.level}</p>
                          <Progress value={upgrade.level * 10} className="h-2 mb-4" />
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon name="Coins" className="text-yellow-500" size={18} />
                              <span className="text-xl font-bold text-yellow-500">{upgrade.price}</span>
                            </div>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              Улучшить
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}

      {activeSection === 'profile' && (
        <div className="container mx-auto px-4 py-8 animate-fade-in">
          <Button variant="ghost" className="mb-6" onClick={() => setActiveSection('home')}>
            <Icon name="ArrowLeft" className="mr-2" size={20} />
            Назад в меню
          </Button>

          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            Профиль игрока
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/70 border-slate-700 lg:col-span-1">
              <div className="p-6 text-center">
                <div className="text-8xl mb-4">🎮</div>
                <h3 className="text-2xl font-bold mb-2">ProPlayer</h3>
                <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white mb-4">
                  Уровень 45
                </Badge>
                <div className="mb-4">
                  <Progress value={65} className="h-3" />
                  <p className="text-sm text-gray-400 mt-2">6,500 / 10,000 XP</p>
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Icon name="Trophy" className="text-yellow-500" size={24} />
                  <span className="text-3xl font-bold text-yellow-500">8,450</span>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800/70 border-slate-700 lg:col-span-2">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6">Статистика</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Побед', value: '432', icon: 'Trophy', color: 'text-yellow-500' },
                    { label: 'Поражений', value: '198', icon: 'X', color: 'text-red-500' },
                    { label: 'Убийств', value: '5,821', icon: 'Target', color: 'text-orange-500' },
                    { label: 'Часов игры', value: '284', icon: 'Clock', color: 'text-blue-500' }
                  ].map((stat, index) => (
                    <div key={index} className="bg-slate-900/50 rounded-lg p-4 text-center">
                      <Icon name={stat.icon as any} className={`mx-auto mb-2 ${stat.color}`} size={28} />
                      <p className="text-2xl font-bold mb-1">{stat.value}</p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4 mt-8">Достижения</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { emoji: '🏆', name: 'Первая победа' },
                    { emoji: '⚔️', name: '100 убийств' },
                    { emoji: '🎯', name: 'Снайпер' },
                    { emoji: '🔥', name: 'Серия 10' },
                    { emoji: '💎', name: 'Легенда' },
                    { emoji: '👑', name: 'Топ 100' },
                    { emoji: '⚡', name: 'Молния' },
                    { emoji: '🛡️', name: 'Защитник' }
                  ].map((achievement, index) => (
                    <div key={index} className="bg-slate-900/50 rounded-lg p-3 text-center hover-scale cursor-pointer">
                      <div className="text-4xl mb-1">{achievement.emoji}</div>
                      <p className="text-xs text-gray-400">{achievement.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {activeSection === 'leaderboard' && (
        <div className="container mx-auto px-4 py-8 animate-fade-in">
          <Button variant="ghost" className="mb-6" onClick={() => setActiveSection('home')}>
            <Icon name="ArrowLeft" className="mr-2" size={20} />
            Назад в меню
          </Button>

          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            Таблица лидеров
          </h2>

          <Card className="bg-slate-800/70 border-slate-700">
            <div className="p-6">
              <div className="space-y-3">
                {leaderboard.map((player) => (
                  <div
                    key={player.id}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all hover-scale cursor-pointer ${
                      player.rank <= 3
                        ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50'
                        : 'bg-slate-900/50 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-center w-12 h-12">
                      {player.rank === 1 && <span className="text-4xl">🥇</span>}
                      {player.rank === 2 && <span className="text-4xl">🥈</span>}
                      {player.rank === 3 && <span className="text-4xl">🥉</span>}
                      {player.rank > 3 && (
                        <span className="text-2xl font-bold text-gray-400">#{player.rank}</span>
                      )}
                    </div>

                    <div className="text-4xl">{player.avatar}</div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{player.name}</h3>
                      <p className="text-sm text-gray-400">{player.wins} побед</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Icon name="Trophy" className="text-yellow-500" size={24} />
                      <span className="text-2xl font-bold text-yellow-500">{player.trophies.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 border-t border-slate-800 backdrop-blur-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-around py-3">
            {[
              { id: 'home', icon: 'Home', label: 'Главная' },
              { id: 'heroes', icon: 'Users', label: 'Герои' },
              { id: 'modes', icon: 'Gamepad2', label: 'Режимы' },
              { id: 'shop', icon: 'ShoppingBag', label: 'Магазин' },
              { id: 'profile', icon: 'User', label: 'Профиль' },
              { id: 'leaderboard', icon: 'Trophy', label: 'Рейтинг' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as any)}
                className={`flex flex-col items-center gap-1 px-2 py-1 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon name={item.icon as any} size={24} />
                <span className="text-xs font-medium hidden sm:block">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
