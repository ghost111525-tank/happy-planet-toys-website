export interface Toy {
  id: string;
  name: string;
  desc: string;
  fullDesc: string;
  price: string;
  img: string;
  category: 'plush' | 'block' | 'electronic' | 'educational';
  features: string[];
}

export const toysData: Toy[] = [
  {
    id: 'bear',
    name: '软绵绵小绒熊',
    desc: '采用优质亲肤材料，宝宝入睡的神奇安抚物。',
    fullDesc: '我们的软绵绵小绒熊采用的是最新的云端回弹记忆棉与 100% 有机亲肤棉手工刺绣工艺制作。它不仅手感像云朵一般柔软，更通过了全球严格的婴幼儿材料亲肤认证。在安静的夜晚，伴随着它的保护入睡，能给宝宝提供无与伦比的安全感。全可机洗设计，让清洁维护也变得轻松无比。',
    price: '¥129',
    img: '/toy_bear.png',
    category: 'plush',
    features: ['可整机水洗', '无有害染料', '促进安眠', '极致柔软回弹']
  },
  {
    id: 'blocks',
    name: '益智色彩积木',
    desc: '学习颜色与形状的最佳伙伴，激发无限想象力。',
    fullDesc: '这套益智色彩积木套装共包含 68 个基础组件，由天然环保榉木制成，涂装部分100%采用食品级无毒水性漆。丰富多样的形状（圆柱、三角、拱门）与极其鲜艳的马卡龙色彩，能有效刺激宝宝的视觉认知与空间建构能力，激发他们创造出专属的小城邦。',
    price: '¥89',
    img: '/toy_blocks.png',
    category: 'block',
    features: ['天然环保榉木', '食品级水性漆', '锻炼手指精细动作', '创意天赋构建']
  },
  {
    id: 'top',
    name: '音乐旋转陀螺',
    desc: '带有发光和音乐效果，让孩子目不转睛的奇妙玩具。',
    fullDesc: '这是一个会发光、会唱歌的神奇童话旋转陀螺！只要指尖轻轻一拨，它在高速旋转的同时，内置柔和 LED 灯组会向周边投射出梦幻星空的动态图案，并循环播放五首经典的舒缓童谣电子版。采用环保 ABS 加厚防撞外壳，是引导宝宝学习追视和感官发育的绝佳选择。',
    price: '¥59',
    img: '/toy_top.png',
    category: 'electronic',
    features: ['加厚防摔外壳', '星空动态投影', '护眼 LED 系统', '内置经典摇篮曲']
  }
];

export const teamMembers = [
  { id: 1, name: 'Anna (安娜姐姐)', role: '首席造梦设计师', slogan: '"每一个玩具，都是写给美好童年的一封信。"', avatar: '🧚‍♀️' },
  { id: 2, name: 'Leo (雷欧哥哥)', role: '安全品质守护者', slogan: '"安全永远第一，让快乐毫无死角。"', avatar: '🦸‍♂️' },
  { id: 3, name: 'Momo (莫莫姐)', role: '儿童心理洞察官', slogan: '"用玩具备受孩子们深切的内心世界。"', avatar: '🧙‍♀️' },
  { id: 4, name: 'Max (麦克斯)', role: '星际交互工程师', slogan: '"在声光电的交融中探索宇宙的奥秘！"', avatar: '👨‍🚀' }
];

export const honorsData = [
  { year: '2025', title: '全球儿童创新益智产品金奖', org: '国际儿童玩具联合发展协会' },
  { year: '2024', title: '年度低碳环保先锋模范企业', org: '联合国绿色家园未来环保组织' },
  { year: '2023', title: '万千中国妈妈年度信赖之选', org: '中国母婴健康管理大联盟' },
  { year: '2022', title: '最佳互联网启蒙产品设计奖', org: '亚洲工业设计大奖组委会' }
];

export const partnersData = [
  { name: '云朵棉花星球 (有机棉认证伙伴)', icon: '☁️' },
  { name: '智慧森林早期启蒙研发组', icon: '🌳' },
  { name: '全球极速达儿童专线物流', icon: '✈️' },
  { name: '极光高标准安全材料监测站', icon: '🔬' },
  { name: '星星乐园互动动画工作室', icon: '🌟' }
];
