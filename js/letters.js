class Letter {
  letter
  letterColor
  cardText
  cardTextColor
  imgUrl
  audioLetterUrl
  audioWordUrl
  audioLetterWordUrl
  constructor (letter, letterColor, cardText, cardTextColor, imgUrl, audioLetterUrl, audioWordUrl, audioLetterWordUrl){
    this.letter = letter;
    this.letterColor = letterColor;
    this.cardText = cardText;
    this.cardTextColor = cardTextColor != 0 ? cardTextColor : this.GenerateCardTextColor(letterColor, -25);
    this.imgPath = imgUrl;
    this.audioLetterUrl = audioLetterUrl;
    this.audioWordUrl = audioWordUrl;
    this.audioLetterWordUrl = audioLetterWordUrl;
  }

  GenerateCardTextColor(color, amt) {
    var usePound = true;
  
    if (color[0] == "#") {
      color = color.slice(1);
        usePound = true;
    }
 
    var num = parseInt(color,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  }
}

const lettersResources = [
  new Letter('A', '#fd6568', 'Apple', 0, '../img/letters/A.png', '../audio/a.mp3','../audio/a_w.mp3', '../audio/a_f.mp3'),
  new Letter('B', '#824d51', 'Bat', 0, '../img/letters/B.png', '../audio/b.mp3','../audio/b_w.mp3', '../audio/b_f.mp3'),
  new Letter('C', '#ed3b3b', 'Car', 0, '../img/letters/C.png', '../audio/c.mp3','../audio/c_w.mp3', '../audio/c_f.mp3'),
  new Letter('D', '#fea360', 'Dog', 0, '../img/letters/D.png', '../audio/d.mp3','../audio/d_w.mp3', '../audio/d_f.mp3'),
  new Letter('E', '#838787', 'Elephant', 0, '../img/letters/E.png', '../audio/e.mp3','../audio/e_w.mp3', '../audio/e_f.mp3'),
  new Letter('F', '#ffa436', 'Flower', 0, '../img/letters/F.png', '../audio/f.mp3','../audio/f_w.mp3', '../audio/f_f.mp3'),
  new Letter('G', '#b06c19', 'Giraffe', 0, '../img/letters/G.png', '../audio/g.mp3','../audio/g_w.mp3', '../audio/g_f.mp3'),
  new Letter('H', '#ea2e2e', 'House', 0, '../img/letters/H.png', '../audio/h.mp3','../audio/h_w.mp3', '../audio/h_f.mp3'),
  new Letter('I', '#3697ff', 'Ice Cream', 0, '../img/letters/I.png', '../audio/i.mp3','../audio/i_w.mp3', '../audio/i_f.mp3'),
  new Letter('J', '#ab36ff', 'Jellyfish', 0, '../img/letters/J.png', '../audio/j.mp3','../audio/j_w.mp3', '../audio/j_f.mp3'),
  new Letter('K', '#fcba6a', 'Kangaroo', 0, '../img/letters/K.png', '../audio/k.mp3','../audio/k_w.mp3', '../audio/k_f.mp3'),
  new Letter('L', '#ff2121', 'Lollipop', 0, '../img/letters/L.png', '../audio/l.mp3','../audio/l_w.mp3', '../audio/l_f.mp3'),
  new Letter('M', '#7d2c1a', 'Monkey', 0, '../img/letters/M.png', '../audio/m.mp3','../audio/m_w.mp3', '../audio/m_f.mp3'),
  new Letter('N', '#6146eb', 'Notebook', 0, '../img/letters/N.png', '../audio/n.mp3','../audio/n_w.mp3', '../audio/n_f.mp3'),
  new Letter('O', '#ff8c00', 'Orange', 0, '../img/letters/O.png', '../audio/o.mp3','../audio/o_w.mp3', '../audio/o_f.mp3'),
  new Letter('P', '#ffa436', 'Pencil', 0, '../img/letters/P.png', '../audio/p.mp3','../audio/p_w.mp3', '../audio/p_f.mp3'),
  new Letter('Q', '#fe6750', 'Queen', 0, '../img/letters/Q.png', '../audio/q.mp3','../audio/q_w.mp3', '../audio/q_f.mp3'),
  new Letter('R', '#7100b7', 'Rainbow', 0, '../img/letters/R.png', '../audio/r.mp3','../audio/r_w.mp3', '../audio/r_f.mp3'),
  new Letter('S', '#ff3636', 'Scissors', 0, '../img/letters/S.png', '../audio/s.mp3','../audio/s_w.mp3', '../audio/s_f.mp3'),
  new Letter('T', '#ffa436', 'Tiger', 0, '../img/letters/T.png', '../audio/t.mp3','../audio/t_w.mp3', '../audio/t_f.mp3'),
  new Letter('U', '#7b94f5', 'Unicorn', 0, '../img/letters/U.png', '../audio/u.mp3','../audio/u_w.mp3', '../audio/u_f.mp3'),
  new Letter('V', '#f7b462', 'Violin', 0, '../img/letters/V.png', '../audio/v.mp3','../audio/v_w.mp3', '../audio/v_f.mp3'),
  new Letter('W', '#ff4e4e', 'Watch', 0, '../img/letters/W.png', '../audio/w.mp3','../audio/w_w.mp3', '../audio/w_f.mp3'),
  new Letter('X', '#4f97a7', 'Xylophone', 0, '../img/letters/X.png', '../audio/x.mp3','../audio/x_w.mp3', '../audio/x_f.mp3'),
  new Letter('Y', '#7b3737', 'Yak', 0, '../img/letters/Y.png', '../audio/y.mp3','../audio/y_w.mp3', '../audio/y_f.mp3'),
  new Letter('Z', '#1a1a1a', 'Zebra', 0, '../img/letters/Z.png', '../audio/z.mp3','../audio/z_w.mp3', '../audio/z_f.mp3'),
];