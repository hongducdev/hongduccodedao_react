interface JsonLD {
  "@context": string;
  "@type": string;
  address: {
    "@type": string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    streetAddress: string;
  };
  email: string;
  image: string;
  jobTitle: string;
  name: string;
  nickname: string;
  birthPlace: string;
  birthDate: string;
  height: string;
  gender: string;
  nationality: string;
  telephone: string;
  url: string;
  sameAs: string[];
}

export const JsonLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thai Nguyen",
    addressRegion: "Viet Nam",
    postalCode: "250000",
    streetAddress:
      "Dai hoc Cong nghe thong tin va truyen thong Thai Nguyen, duong Z115, xa Quyet Thang, thanh pho Thai Nguyen",
  },
  email: "contact.hongduc@gmail.com",
  image: "https://avatars.githubusercontent.com/u/73995275?v=4",
  jobTitle: "Front-end Developer",
  name: "Nguyen Hong Duc",
  nickname: "hongduccodedao",
  birthPlace: "Yen Bai",
  birthDate: "2002-10-05",
  height: "1.83m",
  gender: "male",
  nationality: "Viet Nam",
  telephone: "+84 916 157 704",
  url: "https://hongduccodedao.io.vn/",
  sameAs: [
    "https://www.facebook.com/hongduccodedao",
    "https://www.linkedin.com/hongduccodedao",
    "http://twitter.com/hongduccodedao",
    "http://instagram.com/pinkduwc._",
    "https://github.com/hongduccodedao",
    "https://www.tiktok.com/@hongduccodedao",
  ],
};