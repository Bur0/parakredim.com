export function codeToSlug(code: string) {
  let slug = code.toUpperCase();

  // Para birimlerini Türkçe karşılıklarına çevir
  switch (slug) {
    // Major currencies
    case 'USD':
      return 'dolar';
    case 'EUR':
      return 'euro';
    case 'GBP':
      return 'sterlin';
    case 'JPY':
      return 'japon-yeni';
    case 'AUD':
      return 'avustralya-dolari';
    case 'CAD':
      return 'kanada-dolari';
    case 'CHF':
      return 'frank';
    case 'AED':
      return 'bae-dirhemi';
    case 'ALL':
      return 'arnavutluk-leki';
    case 'ARS':
      return 'arjantin-pesosu';
    case 'AZN':
      return 'azerbaycan-manati';
    case 'BAM':
      return 'bosna-hersek-marki';
    case 'BGN':
      return 'bulgar-levasi';
    case 'BHD':
      return 'bahreyn-dinari';
    case 'BRL':
      return 'brezilya-reali';
    case 'CLP':
      return 'sili-pesosu';
    case 'CNY':
      return 'cin-yuani';
    case 'COP':
      return 'kolombiya-pesosu';
    case 'CRC':
      return 'kostarika-kolonu';
    case 'CZK':
      return 'cek-korunasi';
    case 'DKK':
      return 'danimarka-kronu';
    case 'DZD':
      return 'cezayir-dinari';
    case 'EGP':
      return 'misir-lirasi';
    case 'GEL':
      return 'gurcistan-larisi';
    case 'HKD':
      return 'hong-kong-dolari';
    case 'HUF':
      return 'macar-forinti';
    case 'IDR':
      return 'endonezya-rupiahi';
    case 'ILS':
      return 'israil-sekeli';
    case 'INR':
      return 'hindistan-rupisi';
    case 'IQD':
      return 'irak-dinari';
    case 'IRR':
      return 'iran-riyali';
    case 'ISK':
      return 'izlanda-kronasi';
    case 'JOD':
      return 'urdun-dinari';
    case 'KRW':
      return 'guney-kore-wonu';
    case 'KWD':
      return 'kuveyt-dinari';
    case 'KZT':
      return 'kazak-tengesi';
    case 'LBP':
      return 'lubnan-lirasi';
    case 'LKR':
      return 'sri-lanka-rupisi';
    case 'LYD':
      return 'libya-dinari';
    case 'MAD':
      return 'fas-dirhemi';
    case 'MDL':
      return 'moldovya-leusu';
    case 'MKD':
      return 'makedon-dinari';
    case 'MXN':
      return 'meksika-pesosu';
    case 'MYR':
      return 'malezya-ringgiti';
    case 'NOK':
      return 'norvec-kronu';
    case 'NZD':
      return 'yeni-zelanda-dolari';
    case 'OMR':
      return 'umman-riyali';
    case 'PEN':
      return 'peru-inti';
    case 'PHP':
      return 'filipinler-pesosu';
    case 'PKR':
      return 'pakistan-rupisi';
    case 'PLN':
      return 'polonya-zlotisi';
    case 'QAR':
      return 'katar-riyali';
    case 'RON':
      return 'romanya-leyi';
    case 'RSD':
      return 'sirbistan-dinari';
    case 'RUB':
      return 'rus-rublesi';
    case 'SAR':
      return 'suudi-arabistan-riyali';
    case 'SEK':
      return 'isvec-kronu';
    case 'SGD':
      return 'singapur-dolari';
    case 'SYP':
      return 'suriye-lirasi';
    case 'THB':
      return 'tayland-bahti';
    case 'TND':
      return 'tunus-dinari';
    case 'TWD':
      return 'yeni-tayvan-dolari';
    case 'UAH':
      return 'ukrayna-grivnasi';
    case 'UYU':
      return 'uruguay-pesosu';
    case 'ZAR':
      return 'guney-afrika-randi';
    default:
      return code.toLowerCase();
  }
}
