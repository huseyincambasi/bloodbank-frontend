import axios from "axios";

export const KanUrunleriTalep = () => {

  return (
    <div>
      <form>
        <div>
          <label>Hastanın</label>
          <div>
            <label htmlFor="adiSoyadi">Adı-Soyadı</label>
            <input id="adiSoyadi" type="text"></input>
          </div>
          <div>
            <label htmlFor="protokolNumarasi">Protokol Numarası</label>
            <input id="protokolNumarasi" type="text"></input>
          </div>
          <div>
            <label htmlFor="dogumTarihi">Doğum Tarihi</label>
            <input id="dogumTarihi" type="text"></input>
          </div>
          <div>
            <label htmlFor="cinsiyet">Cinsiyeti</label>
            <input id="cinsiyet" type="text"></input>
          </div>
          <div>
            <label htmlFor="servis">Servisi</label>
            <input id="servis" type="text"></input>
          </div>
          <div>
            <label htmlFor="onTani">Ön Tanısı</label>
            <input id="onTani" type="text"></input>
          </div>
          <div>
            <label htmlFor="kanGrubu">Kan Grubu</label>
            <div>
              <label htmlFor="bilinenKanGrubu">Hastanın Bilinen Kan Grubu</label>
              <div>
                <label htmlFor="kartIle">Kart İle</label>
                <input id="kartIle" type="checkbox"></input>
              </div>
              <div>
                <label htmlFor="beyanIle">Beyan İle</label>
                <input id="beyanIle" type="checkbox"></input>
              </div>
              <div>
                <input id="bilinenKanGrubu" type="text"></input>
              </div>
            </div>
            <div>
              <label htmlFor="eskiKayit">Hastanın Eski Kaydı Var Mı?</label>
              <div>
                <label htmlFor="hayir">Hayır</label>
                <input id="hayir" type="checkbox"></input>
              </div>
              <div>
                <label htmlFor="evet">Evet</label>
                <input id="evet" type="checkbox"></input>
              </div>
              <div>
                <input id="eskiKayit" type="text"></input>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="hazirlanacakKanUrununGrubu">Hazırlanacak olan kan veya kan ürünün kan grubu</label>
            <input id="hazirlanacakKanUrununGrubu" type="text"></input>
          </div>
          <div>
            <label htmlFor="tranfuzyonYapildiMi">Hastaya daha önce transfüzyon</label>
            <div>
              <div>
                <label htmlFor="yapilmis">Yapılmış</label>
                <input id="yapilmis" type="checkbox"></input>
              </div>
              <div>
                <label htmlFor="yapilmamis">Yapılmamış</label>
                <input id="yapilmamis" type="checkbox"></input>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="oykusu">Öyküsü</label>
            <div>
              <div>
                <label htmlFor="alloantikor">Alloantikor</label>
                <input id="alloantikor" type="checkbox"></input>
              </div>
              <div>
                <label htmlFor="transplantasyon">Transplantasyon</label>
                <input id="transplantasyon" type="checkbox"></input>
              </div>
              <div>
                <label htmlFor="transfuzyon">Transfüzyon</label>
                <input id="transfuzyon" type="checkbox"></input>
              </div>
              <div>
                <label htmlFor="transfuzyonReaksiyonu">Transfüzyon Reaksiyonu</label>
                <input id="transfuzyonReaksiyonu" type="checkbox"></input>
              </div>
              <div>
                <label htmlFor="gecirilmisGebelik">Geçirilmiş Gebelik</label>
                <input id="gecirilmisGebelik" type="checkbox"></input>
              </div>
              <div>
                <label htmlFor="fetomaternalUyusmazlik">Fetomaternal Uyuşmazlık</label>
                <input id="fetomaternalUyusmazlik" type="checkbox"></input>
              </div>
              <div>
                <label htmlFor="digerOykuler">İlişkili olabilecek diğer öyküler/ özel durumlar</label>
                <input id="digerOykuler" type="text"></input>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="transfusyonEndikasyonu">Transfüzyon Endikasyonu</label>
            <div>
              <div>
                <label htmlFor="ameliyat">Ameliyat</label>
                <input id="ameliyat" type="checkbox"></input>
              </div>
              <div>
                <label htmlFor="hemoglobinYukseltmek">Hemoglobin Yükseltmek</label>
                <input id="hemoglobinYukseltmek" type="checkbox"></input>
              </div>
              <div>
                <label htmlFor="trombositopeni">Trombositopeni</label>
                <input id="trombositopeni" type="checkbox"></input>
              </div>
              <div>
                <label htmlFor="koagulasyonBozuklugu">Koagülasyon Bozukluğu</label>
                <input id="koagulasyonBozuklugu" type="checkbox"></input>
              </div>
              <div>
                <label htmlFor="digerTransfusyonEndikasyonu">Diğer</label>
                <input id="digerTransfusyonEndikasyonu" type="text"></input>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label>Kan ve Kan Bileşenin</label>
          <div>
            <label htmlFor="istekTarihi">İstek Tarihi</label>
            <input id="istekTarihi" type="text"></input>
          </div>
          <div>
            <label htmlFor="planlananTransfuzyonTarihi">Planlanan Transfüzyon Tarihi</label>
            <input id="planlananTransfuzyonTarihi" type="text"></input>
          </div>
          <div>
            <label htmlFor="planlananVerilisSuresi">Planlanan Veriliş Süresi</label>
            <input id="planlananVerilisSuresi" type="text"></input>
          </div>
          <div>
            <label htmlFor="istenenKanUrunleri">İstenen Kan / Kan Ürününün Cinsi Miktarı</label>
            <div>
              <input id="eritrositKonsantresi" type="checkbox"></input>
              <label htmlFor="eritrositKonsantresi">Eritrosit Konsantresi</label>
              <input id="eritrositKonsantresiMiktar" type="text"></input>
              <label htmlFor="eritrositKonsantresiMiktar">Ünite / mL</label>
            </div>
            <div>
              <input id="tazeDonmusPlasma" type="checkbox"></input>
              <label htmlFor="tazeDonmusPlasma">Taze Donmuş Plazma</label>
              <input id="tazeDonmusPlasmaMiktar" type="text"></input>
              <label htmlFor="tazeDonmusPlasmaMiktar">Ünite / mL</label>
            </div>
            <div>
              <input id="trombositKonsantresiTamKandan" type="checkbox"></input>
              <label htmlFor="trombositKonsantresiTamKandan">Trombosit Konsantresi (Tam kandan)</label>
              <input id="trombositKonsantresiTamKandanMiktar" type="text"></input>
              <label htmlFor="trombositKonsantresiTamKandanMiktar">Ünite / mL</label>
            </div>
            <div>
              <input id="trombositKonsantresiAfarez" type="checkbox"></input>
              <label htmlFor="trombositKonsantresiAfarez">Trombosit Konsantresi (Aferez İle)</label>
              <input id="trombositKonsantresiAfarezMiktar" type="text"></input>
              <label htmlFor="trombositKonsantresiAfarezMiktar">Ünite / mL</label>
            </div>
            <div>
              <input id="tazeKan" type="checkbox"></input>
              <label htmlFor="tazeKan">Taze Kan</label>
              <input id="tazeKanMiktar" type="text"></input>
              <label htmlFor="tazeKanMiktar">Ünite / mL</label>
            </div>
            <div>
              <input id="digerKan" type="checkbox"></input>
              <label htmlFor="digerKanUrunu">Diğer</label>
              <input id="digerKanUrunu" type="text"></input>
              <input id="digerKanMiktar" type="text"></input>
              <label htmlFor="digerKanMiktar">Ünite / mL</label>
            </div>
          </div>
          <div>
            <label htmlFor="ekIslemIstemi">Ek İşlem İstemi</label>
            <div>
              <label htmlFor="lokositFiltrasyonu">Lökosit filtrasyonu</label>
              <label htmlFor="lokositFiltrasyonuEvet">Evet</label>
              <input id="lokositFiltrasyonuEvet" type="checkbox"></input>
              <label htmlFor="lokositFiltrasyonuHayir">Hayır</label>
              <input id="lokositFiltrasyonuHayir" type="checkbox"></input>
            </div>
            <div>
              <label htmlFor="isinlanma">Işınlama</label>
              <label htmlFor="isinlanmaEvet">Evet</label>
              <input id="isinlanmaEvet" type="checkbox"></input>
              <label htmlFor="isinlanmaHayir">Hayır</label>
              <input id="isinlanmaHayir" type="checkbox"></input>
            </div>
            <div>
              <label htmlFor="yikama">Yıkama</label>
              <label htmlFor="yikamaEvet">Evet</label>
              <input id="yikamaEvet" type="checkbox"></input>
              <label htmlFor="yikamaHayir">Hayır</label>
              <input id="yikamaHayir" type="checkbox"></input>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="acilTalep">Acil Talep</label>
          <div>
            <label htmlFor="aciliyetDurumu">Aciliyet Durumu</label>
            <div>
              <input id="oncelikli" type="checkbox"></input>
              <label htmlFor="oncelikli">Öncelikli (Kan 3 saat içinde temin edilmelidir)</label>
            </div>
            <div>
              <input id="acil" type="checkbox"></input>
              <label htmlFor="acil">Acil (Kan 1 saat içinde temin edilmelidir)</label>
            </div>
            <div>
              <input id="cokAcil" type="checkbox"></input>
              <label htmlFor="cokAcil">Çok Acil (Kan 15 dakika içinde temin edilmelidir)</label>
            </div>
          </div>
          <div>
            <label htmlFor="kabulEdilenSecenekler">Hayati Tehlike Nedeni ile Kabul Ettiğiniz Seçenek</label>
            <div>
              <input id="taramaTestleri" type="checkbox"></input>
              <label htmlFor="taramaTestleri">Tarama testlerinin kart test ile çalışılmasını kabul ediyorum.</label>
            </div>
            <div>
              <input id="crossMatch" type="checkbox"></input>
              <label htmlFor="crossMatch">Cross-match testinin yapılmamasını kabul ediyorum.</label>
            </div>
            <div>
              <input id="uygunlukTransfuzyonu" type="checkbox"></input>
              <label htmlFor="uygunlukTransfuzyonu">Kan grubu uygunluğu ile transfüzyonu kabul ediyorum.</label>
            </div>
            <div>
              <input id="zeroRhNegativeErosit" type="checkbox"></input>
              <label htmlFor="zeroRhNegativeErosit">0 Rh negatif eritrosit konsantresini kabul ediyorum.</label>
            </div>
            <div>
              <input id="abPlazma" type="checkbox"></input>
              <label htmlFor="abPlazma">AB grubu plazmayı kabul ediyorum.</label>
            </div>
            <div>
              <input id="farkliTrombosit" type="checkbox"></input>
              <label htmlFor="farkliTrombosit">Farklı gruptan trombosit konsantresi verilmesini kabul ediyorum.</label>
            </div>
            <div>
              <input id="diger" type="checkbox"></input>
              <label htmlFor="digerKabulEdilenSecenekler">Diğer:</label>
              <input id="digerKabulEdilenSecenekler" type="text"></input>
            </div>
          </div>
        </div> 
      </form>   
    </div>
  )
};
