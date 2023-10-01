var list = [
  { p: 1, i: `Ayanlığı kaldırdı. Köylere "Muhtar" eyaletlere "Müşir" atadı` },
  { p: 1, i: `Müsadere sistemini kaldırdı` },
  { p: 1, i: `Tımar sistemini kaldırdı.` },
  { p: 1, i: `Devlet dairelerine resmini astırdı. (Tasvir - i Hümayun)` },
  { p: 1, i: `Evkaf Vekaleti (Vakıflar Müdürlüğü) kuruldu` },
  { p: 1, i: `Belediye işlerini düzenlemek için "ihtisap nezareti" kuruldu` },
  { p: 1, i: `Pasaport uygulamasına geçildi.` },
  { p: 1, i: `Posta teşkilatı kuruldu` },
  { p: 1, i: `İstanbul'a gelenler için "Mürur teskeresi" düzenlendi.` },
  { p: 1, i: `İdari işleri düzenlemek amacıyla "Dar- ı Şurayı Babıali" kuruldu.`},
  { p: 1, i: `Memurların yargı ve terfi işlemleri için "Meclis- i Valayı Ahkâm- ı Adliye" kuruldu.`},
  { p: 1, i: `İlk resmi gazete "Takvim - i Vekayi" çıkarıldı` },
  { p: 1, i: `Memurlara maaş bağlandı. Memurlar dahiliye ve hariciye olarak ikiye ayrıldı.` },
  { p: 1, i: `Devlet memurlarının zorunlu ceket, pantolon ve fes giymesi zorunlu hale geldi.` },
  { p: 1, i: `Devlet memuru yetiştirmek amacıyla "Mekteb- i Maarif-i Adliye" açıldı.` },
  { p: 1, i: `Divan- ı Hümayun kaldırıldı. Yerine "Heyet-i Vükela" kuruldu. (Günümüzün Bakanlar Kurulu)` },
  { p: 1, i: `Adelete önem verdiği ve yeni kanun ve tüzükler hazırladığı için "Adli" unvanlı verilen padisah` },
  { p: 1, i: `Sekban- ı Cedit ve Eşkinci Ocağı kuruldu` },
  { p: 1, i: `Yeniçeri Ocağı kaldırıldı. Yerine "Asakar- i Mansure- i Muhammediye" ordusu kuruldu` },
  { p: 1, i: `Ordunun ihtiyacının karşılanması içinde "Mekteb-i Fünun-ı Harbiye" kuruldu` },
  { p: 1, i: `İlk nüfus sayımı yapıldı. (Askeri amaçlı` },
  { p: 1, i: `"Darı Şurayı Askeri" kuruldu. (Askerlik şubeleri` },
  { p: 1, i: ` "Mekteb- i Harbiye" ve "Mekteb- i Tıbbiye" açıldı` },
  { p: 1, i: ` Köylerin ve kasabaların güvenliğinin sağlanması amacıyla redif birlikleri kurulmuştur.` },
  { p: 1, i: `Seraskerlik(Genel kurmay Başkanığı)kuruldu` },
  { p: 1, i: `Avrupa'ya eğitim amaçlı ilk öğrenciler gönderildi. ` },
  { p: 1, i: `Mekteb- i Ulumi Edebiye ve Rüştiyeler (ortaokullar) açıldı` },
  { p: 1, i: `Karantina uygulandı(Bulaşıcı hastalıklar için)` },
  { p: 1, i: `Yurt içine geziler düzenlendi.` },
  { p: 1, i: `İlk öğretimi zorunlu yaptı. (Sadece İstanbul'da) ` },
  { p: 1, i: `Mehterhane kapatıldı yerine Donizetti paşalar tarafından "Mızıkayı Hümayun" kuruldu.` },
  { p: 1, i: `Tercüme odaları açıldı. (Yabancı dil bilen Müslüman diplomat yetiştirmek amaçlanmıştır.) ` },
  { p: 1, i: `"Feshane" kurdu. (Fes Üretimi) [Çuha Fabrikası]` },
  { p: 1, i: `Memurun giydiği ceket ve pantolonu ise yerli kumaştan olması zorunluluğu getirildi.` },
  { p: 1, i: `Bez fabrikası kuruldu` },
  { p: 1, i: `Yerli malı teşvik edildi.` },
  { p: 1, i: `Senedi ittifak` },
  //------------------
  { p: 2, i: `Tanzimat Fermanı` },
  { p: 2, i: `Müslüman ve Hristiyan bütün tebaanın can güvenliği,malı ,ırzı ,namusu korunacak. ` },
  { p: 2, i: `Vergi herkesin gücü oranında alınacak.` },
  { p: 2, i: `Askerlik tüm osmanlı tebaası için zorunlu olacak.Askerlik süresi 4 veya 5 yıl olacak. ` },
  { p: 2, i: `Hic kimse yargılanmadan ölün cezası verilmeyecek,herkes malını mülkünü istediği gibi tasarruf edebilecek.` },
  { p: 2, i: `Ülkenin harap olmasına yol açan rüsveti önlemek amacıyla etkili bir kanun hazırlanacak. ` },
  { p: 2, i: `Müslümanlar ile gayri müslimler kanun önünde eşit olacak. ` },
  { p: 2, i: `Cizye vergisi kaldırılacak.Gayrimüslimler askerlik yapacak veya bedelini ödeyecek. ` },
  { p: 2, i: `Müslümanlar ile gayrimüslimler arasındaki davalara bakmak için karma mahkemeler kurulacak. Gayri müslimlerin sahitliği kabul edilecek.Herkes kendi inancına göre yemin edebilecek.` },
  { p: 2, i: `Yazışmalarda veya halkın ve memurların söyleminde gayrimüslimleri asağılayan tabirler kullanılmayacak.` },
  { p: 2, i: `Yabancılarda osmanlı devleti sınırları içerisinde mülk sahibi olabilecek.` },
  { p: 2, i: `İltizam usulü kadırılacak.Din ve mezhebine olursa olsun herkes aynı vergiyi ödeyecek ` },
  { p: 2, i: `Meclisi Ali Tanzimat ve (1861 de meclisi Ahkam-ı Adliye ile birlestirildi.) Meclisi Ahkam-ı Adliye açıldı. ` },
  { p: 2, i: `Meclis-i Maarif-i Umumiye Nezareti kuruldu.(MEB) ` },
  { p: 2, i: ` Encümen-i Daniş kuruldu(Fen kitaplarının tercümesini yaptı.Redhouse ve Hammer burada çalışmalar yaptı.)` },
  { p: 2, i: `Darülmuallimin (erkek) ve Darülmuallimat (kız) öğretmen okulu açıldı.` },
  { p: 2, i: `Jandarma teşkilatı kuruldu.Polis teşkilatı kuruldu.` },
  { p: 2, i: `İlk defa İzmir-Aydı(aydın yoksa turgutlu) arasına demir yolu yapıldı.` },
  { p: 2, i: `Şirketi hayriye kuruldu` },
  { p: 2, i: `İlk defa telgraf hatları cekildi(Edirne-İstanbul-Şumnu arasına).` },
  { p: 2, i: `Muhassıllık mesclisleri açıldı.Arazi kanunnamasi çıkarıldı.` },
  { p: 2, i: ` Kırım savası sırasında ingiltereden ilk defa dış borç alındı.` },
  { p: 2, i: ` Kaime adında ilk kağıt para başıldı.` },
  { p: 2, i: ` Bank-ı Dersaadet adında ilk banka açıldı.` },
  { p: 2, i: `Bank-ı Osmani adında ilk defa yabancı sermayeli ingiliz bankası açıldı.Bu bankaya para basma yetkisi verildi. ` },
  { p: 2, i: `Vekyi Tıbbiye adında ilk dergi basıldı.` },
  { p: 2, i: ` İlk özel gazete Tercüman-ı Ahval çıkarıldı.` },
  { p: 2, i: `Yarı reşmi gazete Cerideü-i Havadis çıkarıldı` },
  { p: 2, i: ` Güllü Agop ilk Osmanlı Modern tiyatrosunu kurdu.` },
  { p: 2, i: `Devlet memuru ihtiyacını karsılamak için Mekteb-i mülkiye açıldı` },
  { p: 2, i: `Osmanlıda sanayilesmeyi yürütecek eleman yetiştirmek için 1860'da Islah-ı Sanayi Komisyonu kuruldu` },
  //----------------- 
  { p: 3, i: `Mecelle yürürlüğe girdi.(Ahmet cevdet Pasa)` },
  { p: 3, i: `Dünyanın üçüncü büyük deniz filosu oluşturuldu.` },
  { p: 3, i: `Darüşşafaka açıldı` },
  { p: 3, i: `Hilali Ahmer Cemiyeti kuruldu.` },
  { p: 3, i: `Nizamiye mahkemeleri kuruldu.` },
  { p: 3, i: `Ramazan kararnamesi(1875) ile devletin faizleri bile ödeyemeyeceği ilan edildi.` },
  { p: 3, i: `Vilayet Nizamnamesi çıkarıldı.(Köy-Nahiye-Kaza-Liva-Vilayet)` },
  { p: 3, i: `İlk defa padisah yurt dışına çıktı` },
  { p: 3, i: `Beylerbeyi ve Cırağan sarayları yapıldı.` },
  { p: 3, i: `Maarif Nizamnamesi,Fransa örnek alınarak yayımlandı(İptidai-Rüstiye-İdadi-Fünün)` },
  { p: 3, i: `Robert Koleji ve Galayasaray Sultanisi açıldı.` },
  { p: 3, i: `DarulMuallimat(Kız öğretmen okulu) açıldı` },
  //--------------------
  { p: 4, i: `Türk tarihinin ilk anayasası olan Kanunuesasi'yi ilan etti` },
  { p: 4, i: `Yönetim merkezini yıldız sarayına taşıdı.` },
  { p: 4, i: `Kız çocukları için Kız meslek liseleri açıldı.` },
  { p: 4, i: `1863 te kurulan memleket sandıkları  1888'de mithat Paşanın gayretleri ile ziraat bankasına dönüştüldü.` },
  { p: 4, i: `Tercüman-ı Hakikat adında gazete açıldı.` },
  { p: 4, i: `Ermeni isyanlarının baştırılması ve Rusya ile çıkacak bir savas durumunda bölgede hazır silahlı güç bulundurmak için yerel halktan olusan Hamidiye Alayları kuruldu.` },
  { p: 4, i: `Haber getirip götüren Jurnal Teşkilatı kuruldu.` },
  { p: 4, i: `Büyük bir telgraf ağı kuruldu.(öğrenci yetiştirmek için Telgraf mektebi kuruldu.)` },
  { p: 4, i: `ilk defa çocuk hastanesi(Hamidiye etfal)açıldı.Engellilere yönelik kurumlar açıldı` },
  { p: 4, i: `Çoban okulu,baytar mektebi,dişci mektebi ve orman mektebi gibi mektepler açıldı.` },
  { p: 4, i: `İlk defa müze açıldı.(Müzeyi Hümayun adındaki bu müzenin başına Osman Hamdi bey atandı.Müzenin adı Asar-ı Atika)` },
  { p: 4, i: `Osman hamdi bey tarafından Sanay-i Nefise Mektebi kuruldu.(Güzel sanatlar Fakültesi)(Resmi adı Mekteb-i Sanay-i nefise-i Şahane )` },
  { p: 4, i: `Ertuğrul fırkateyi Japonya dönüsü battı.` },
  { p: 4, i: `Tren sektörünün gelişmesi için Anadılu-Osmanlı Şömendifer Kumpanyası kuruldu.` },
  { p: 4, i: `Dış politika olarak İslamcılık(Ümmetçilik) benimsendi.` },
  { p: 4, i: `II.Wilheim'in başlattığı 3B projesinin yapımına başlandı.(Berlin-Boğazlar-Bağdat demir yolu)` },
  { p: 4, i: `Haydarpaşa tren garı yapıldı.` },
  { p: 4, i: `Yayın kadrosu ve sahibi kadınlardan oluşan Şıkefezar(Çiçek Bahçesi) yayın hayatına başladı` },
  { p: 4, i: `1895 yılında çocuk,yaşlı,sakat ve kimsesizleri koruma amacıyla istanbulda Darülaceze adıyla Osmanlının ilk sosyal yardım kurumu açıldı.` },
  { p: 4, i: `1890 larda başlayan ermeni olayları sonunu yetim kalan ile başıboş çocukların hem ahlaki hem de ilmi eğitimlerini alması için 1903 te Darülhayr-ı Aliye açıldı` },
  { p: 4, i: `Kimsesiz ve korumay muhtaç çocuklar için Himaye-i Etfal Cemiyeti kuruldu.(Aile ve soysal politikalar bakanlığına bağlı Çocuk Hizmetleri Genel Müdürlüğü)` },
  { p: 4, i: `1881'de Muharrem kararnamesi yayımlanarak Osmanlı devleti resmen iflas etttiğini açıkladı.Bunun üzerine alaçaklı devletler Duyun-u Umumiye İdaresini(Genel Borçlar İdaresi) kurdu(Başkanlığını İngiltere ve Fransa yapmıştır.)` },
 


  

  
 
  
];

var padisah = {
  1: "II.mahmut",
  2: "Sultan ApdülMecit",
  3: "Sultan Abdulaziz",
  4: "II AbdülHamit",
};

karistir(list);
function karistir(arra1) {
  var ctr = arra1.length,
    temp,
    index;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);

    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

var number = 0;
var cardManin = document.getElementById("cardMain");

sonraki();
function sonraki() {
  if (number == list.length) {
    console.log("-------");
    number = 0;
    karistir(list);
    sonraki();
  } else {
    console.log(list[number].i);
    cardManin.innerHTML = `
        <div class="card">
        
                <div class="front">
                <span>${number+1}</span>
                    <p>${list[number].i}</p>
                </div>
                <div class="back">
                <p>${padisah[list[number].p]}</p>
                </div>
        </div>
   `;
    number += 1;
  }
}
