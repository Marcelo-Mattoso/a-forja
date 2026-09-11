export const youtubeChannelUrl = 'https://www.youtube.com/@marcelomattoso';
export const cafePlaylistUrl = 'https://www.youtube.com/playlist?list=PLBAHGUGvjMRQ';
const playlistId = 'PLBAHGUGvjMRQ';
const videoUrl = (id: string) => `https://www.youtube.com/watch?v=${id}&list=${playlistId}`;
export const contactEmail = 'mmattoso900@gmail.com';
export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/mattoso900/' },
  { label: 'YouTube', href: youtubeChannelUrl },
  { label: 'Amazon', href: 'https://www.amazon.com.br/dp/B0H4WP2GH2?binding=kindle_edition&ref=dbs_dp_sirpi' },
];
export const books = [
  ['Aquele que não tem palavra', 'Livro 1', 'https://m.media-amazon.com/images/I/41qAw2ZWQSL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg', 'https://www.amazon.com.br/gp/product/B0H75R15DS?ref_=dbs_m_mng_rwt_calw_tkin_0&storeType=ebooks'],
  ['A Parte Morta do Jardim', 'Livro 2', 'https://m.media-amazon.com/images/I/41PC2vHXetL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg', 'https://www.amazon.com.br/gp/product/B0H763KQLG?ref_=dbs_m_mng_rwt_calw_tkin_1&storeType=ebooks'],
  ['O Homem que Sabia Fugir', 'Livro 3', 'https://m.media-amazon.com/images/I/31dVZRK+zIL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg', 'https://www.amazon.com.br/gp/product/B0H75WV4NL?ref_=dbs_m_mng_rwt_calw_tkin_2&storeType=ebooks'],
  ['O lar que não cabia nela', 'Livro 4', 'https://m.media-amazon.com/images/I/41j+YGZJTNL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg', 'https://www.amazon.com.br/gp/product/B0H764LNXS?ref_=dbs_m_mng_rwt_calw_tkin_3&storeType=ebooks'],
  ['A estrada que nunca chegou', 'Livro 5', 'https://m.media-amazon.com/images/I/312BdlxbJOL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg', 'https://www.amazon.com.br/gp/product/B0H7Q57X74?ref_=dbs_m_mng_rwt_calw_tkin_4&storeType=ebooks'],
  ['O homem que rezava com a espada', 'Livro 6', 'https://m.media-amazon.com/images/I/41A+n+b8NOL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg', 'https://www.amazon.com.br/gp/product/B0GX2WF6X2?ref_=dbs_m_mng_rwt_calw_tkin_5&storeType=ebooks'],
  ['O sonho que não era dele', 'Livro 7', 'https://m.media-amazon.com/images/I/416hB6jUnwL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg', 'https://www.amazon.com.br/gp/product/B0H94RVJLT?ref_=dbs_m_mng_rwt_calw_tkin_6&storeType=ebooks'],
  ['O homem que carregava seu milagre', 'Livro 8', 'https://m.media-amazon.com/images/I/41eZ0NACyLL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg', 'https://www.amazon.com.br/gp/product/B0H94X7QZ3?ref_=dbs_m_mng_rwt_calw_tkin_7&storeType=ebooks'],
  ['O homem que procurava onde ficar', 'Livro 9', 'https://m.media-amazon.com/images/I/41rk3YCcEYL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg', 'https://www.amazon.com.br/gp/product/B0HCW6YQ5V?ref_=dbs_m_mng_rwt_calw_tkin_8&storeType=ebooks'],
] as const;
export const videos = [
  { title: 'A tecnologia esqueceu de ser humana', episode: 'Café, Pão e Milagre #14', image: 'https://i2.ytimg.com/vi/JZD2R-IQcyo/hqdefault.jpg', href: videoUrl('JZD2R-IQcyo') },
  { title: 'Nem toda oportunidade é caminho', episode: 'Café, Pão e Milagre #13', image: 'https://i2.ytimg.com/vi/uKeP5p-dTg4/hqdefault.jpg', href: videoUrl('uKeP5p-dTg4') },
  { title: 'O perigo de dizer sim para tudo', episode: 'Café, Pão e Milagre #12', image: 'https://i2.ytimg.com/vi/d8XluGmU9vk/hqdefault.jpg', href: videoUrl('d8XluGmU9vk') },
  { title: 'Quando o boleto também senta à mesa', episode: 'Café, Pão e Milagre #11', image: 'https://i2.ytimg.com/vi/rlPMIFtO74E/hqdefault.jpg', href: videoUrl('rlPMIFtO74E') },
  { title: 'Trabalhar também é tentar ficar de pé', episode: 'Café, Pão e Milagre #10', image: 'https://i2.ytimg.com/vi/--EimCr6Zag/hqdefault.jpg', href: videoUrl('--EimCr6Zag') },
  { title: 'A mesa continua', episode: 'Café, Pão e Milagre #9', image: 'https://i2.ytimg.com/vi/mMG4Zr7RJMA/hqdefault.jpg', href: videoUrl('mMG4Zr7RJMA') },
  { title: 'Quando alguém senta do seu lado', episode: 'Café, Pão e Milagre #8', image: 'https://i2.ytimg.com/vi/u5z3a-HSd6A/hqdefault.jpg', href: videoUrl('u5z3a-HSd6A') },
  { title: 'O corpo lembra o caminho', episode: 'Café, Pão e Milagre #7', image: 'https://i3.ytimg.com/vi/bPWs-mpO3QY/hqdefault.jpg', href: videoUrl('bPWs-mpO3QY') },
  { title: 'A casa vazia também fala', episode: 'Café, Pão e Milagre #6', image: 'https://i3.ytimg.com/vi/6sThkenvjEc/hqdefault.jpg', href: videoUrl('6sThkenvjEc') },
  { title: 'Deus chega trabalhando', episode: 'Café, Pão e Milagre #5', image: 'https://i3.ytimg.com/vi/zuArzlOK2ZY/hqdefault.jpg', href: videoUrl('zuArzlOK2ZY') },
  { title: 'Primeiro meu jardim', episode: 'Café, Pão e Milagre #4', image: 'https://i4.ytimg.com/vi/sG4jRZX8vbA/hqdefault.jpg', href: videoUrl('sG4jRZX8vbA') },
  { title: 'Pessoas são seus próprios milagres', episode: 'Café, Pão e Milagre #3', image: 'https://i3.ytimg.com/vi/v-871-pakiU/hqdefault.jpg', href: videoUrl('v-871-pakiU') },
  { title: 'Eu amadureci, mas não quero endurecer', episode: 'Café, Pão e Milagre #2', image: 'https://i4.ytimg.com/vi/sUV14cb0I1w/hqdefault.jpg', href: videoUrl('sUV14cb0I1w') },
  { title: 'Não precisa chegar inteiro', episode: 'Café, Pão e Milagre #1', image: 'https://i4.ytimg.com/vi/gdDC0B6IcDY/hqdefault.jpg', href: videoUrl('gdDC0B6IcDY') },
] as const;
export const featuredVideo = videos[0];
