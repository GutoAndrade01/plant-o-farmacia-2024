document.addEventListener('DOMContentLoaded', function () {
    // Array de farmácias com suas informações
    const farmacias = [
        { semana: '29/12/2023 a 04/01/2024', farmacia: 'Farma Prata', telefones: ['3727-4775', '99902-5559'] },
        { semana: '05/01/2024 a 11/01/2024', farmacia: 'Farmácia Orletti', telefones: ['3727-1442', '99912-0913'] },
        { semana: '12/01/2024 a 18/01/2024', farmacia: 'Farmácia do Adelson', telefones: ['3727-1321', '99897-1321'] },
        { semana: '19/01/2024 a 25/01/2024', farmacia: 'Farmácia Popular', telefones: ['3727-2839', '99824-1143'] },
        { semana: '26/01/2024 a 01/02/2024', farmacia: 'Farmácia são Geraldo', telefones: ['3727-22332', '99976-8347'] },
        { semana: '02/02/2024 a 08/02/2024', farmacia: 'Farmácia Santa Lucia', telefones: ['3727-1467', '99273-2142'] },
        { semana: '09/02/2024 a 15/02/2024', farmacia: 'Farmácia Central', telefones: ['3727-2596', '99804-2626'] },
        { semana: '16/02/2024 a 22/02/2024', farmacia: 'Farmácia do Coco', telefones: ['3727-4000', '99947-5457'] },
        { semana: '23/02/2024 a 29/02/2024', farmacia: 'Farmavida', telefones: ['3727-1560', '99522-2738'] },
        { semana: '01/03/2024 a 07/03/2024', farmacia: 'Farmácia do Baltazar', telefones: ['3727-3220', '99976-5541'] },
        { semana: '08/03/2024 a 14/03/2024', farmacia: 'RM Farma Popular', telefones: ['3727-1736', '99913-6551'] },
        { semana: '15/03/2024 a 21/03/2024', farmacia: 'Farmácia do Marcelão', telefones: ['3727-2503', '99726-7062'] },
        { semana: '22/03/2024 a 28/03/2024', farmacia: 'Vital Farma', telefones: ['3727-4002', '99909-3066'] },
        { semana: '29/03/2024 a 04/04/2024', farmacia: 'Farmácia Avenida', telefones: ['3727-2453', '99530-4841'] },
        { semana: '05/04/2024 a 11/04/2024', farmacia: 'Farmácia do Lodi', telefones: ['3727-2315', '99903-3194'] },
        { semana: '12/04/2024 a 18/04/2024', farmacia: 'Drogaria Gozer', telefones: ['3727-2164', '99901-0394'] },
        { semana: '19/04/2024 a 25/04/2024', farmacia: 'Farmácia do Simão', telefones: ['3727-0052', '99947-3746'] },
        { semana: '26/04/2024 a 02/05/2024', farmacia: 'Farma Prata', telefones: ['3727-4775', '99902-5559'] },
        { semana: '03/05/2024 a 09/05/2024', farmacia: 'Farmácia Orletti', telefones: ['3727-1442', '99912-0913'] },
        { semana: '10/05/2024 a 16/05/2024', farmacia: 'Farmácia do Adelson', telefones: ['3727-1321', '99897-1321'] },
        { semana: '17/05/2024 a 23/05/2024', farmacia: 'Farmácia Popular', telefones: ['3727-2839', '99824-1143'] },
        { semana: '24/05/2024 a 30/05/2024', farmacia: 'Farmácia são Geraldo', telefones: ['3727-22332', '99976-8347'] },
        { semana: '31/05/2024 a 06/06/2024', farmacia: 'Farmácia Santa Lucia', telefones: ['3727-1467', '99273-2142'] },
        { semana: '07/06/2024 a 13/06/2024', farmacia: 'Farmácia Central', telefones: ['3727-2596', '99804-2626'] },
        { semana: '14/06/2024 a 20/06/2024', farmacia: 'Farmácia do Coco', telefones: ['3727-4000', '99947-5457'] },
        { semana: '21/06/2024 a 27/06/2024', farmacia: 'Farmavida', telefones: ['3727-1560', '99522-2738'] },
        { semana: '28/06/2024 a 04/07/2024', farmacia: 'Farmácia do Baltazar', telefones: ['3727-3220', '99976-5541'] },
        { semana: '05/07/2024 a 11/07/2024', farmacia: 'RM Farma Popular', telefones: ['3727-1736', '99913-6551'] },
        { semana: '12/07/2024 a 18/07/2024', farmacia: 'Farmácia do Marcelão', telefones: ['3727-2503', '99726-7062'] },
        { semana: '19/07/2024 a 25/07/2024', farmacia: 'Vital Farma', telefones: ['3727-4002', '99909-3066'] },
        { semana: '26/07/2024 a 01/08/2024', farmacia: 'Farmácia Avenida', telefones: ['3727-2453', '99530-4841'] },
        { semana: '02/08/2024 a 08/08/2024', farmacia: 'Farmácia do Lodi', telefones: ['3727-2315', '99903-3194'] },
        { semana: '09/08/2024 a 15/08/2024', farmacia: 'Drogaria Gozer', telefones: ['3727-2164', '99901-0394'] },
        { semana: '16/08/2024 a 22/08/2024', farmacia: 'Farmácia do Simão', telefones: ['3727-0052', '99947-3746'] },
        { semana: '23/08/2024 a 29/08/2024', farmacia: 'Farma Prata', telefones: ['3727-4775', '99902-5559'] },
        { semana: '30/08/2024 a 05/09/2024', farmacia: 'Farmácia Orletti', telefones: ['3727-1442', '99912-0913'] },
        { semana: '06/09/2024 a 12/09/2024', farmacia: 'Farmácia do Adelson', telefones: ['3727-1321', '99897-1321'] },
        { semana: '13/09/2024 a 19/09/2024', farmacia: 'Farmácia Popular', telefones: ['3727-2839', '99824-1143'] },
        { semana: '20/09/2024 a 26/09/2024', farmacia: 'Farmácia são Geraldo', telefones: ['3727-22332', '99976-8347'] },
        { semana: '27/09/2024 a 03/10/2024', farmacia: 'Farmácia Santa Lucia', telefones: ['3727-1467', '99273-2142'] },
        { semana: '04/10/2024 a 10/10/2024', farmacia: 'Farmácia Central', telefones: ['3727-2596', '99804-2626'] },
        { semana: '11/10/2024 a 17/10/2024', farmacia: 'Farmácia do Coco', telefones: ['3727-4000', '99947-5457'] },
        { semana: '18/10/2024 a 24/10/2024', farmacia: 'Farmavida', telefones: ['3727-1560', '99522-2738'] },
        { semana: '25/10/2024 a 31/10/2024', farmacia: 'Farmácia do Baltazar', telefones: ['3727-3220', '99976-5541'] },
        { semana: '01/11/2024 a 07/11/2024', farmacia: 'RM Farma Popular', telefones: ['3727-1736', '99913-6551'] },
        { semana: '08/11/2024 a 14/11/2024', farmacia: 'Farmácia do Marcelão', telefones: ['3727-2503', '99726-7062'] },
        { semana: '15/11/2024 a 21/11/2024', farmacia: 'Vital Farma', telefones: ['3727-4002', '99909-3066'] },
        { semana: '22/11/2024 a 28/11/2024', farmacia: 'Farmácia Avenida', telefones: ['3727-2453', '99530-4841'] },
        { semana: '29/11/2024 a 05/12/2024', farmacia: 'Farmácia do Lodi', telefones: ['3727-2315', '99903-3194'] },
        { semana: '06/12/2024 a 12/12/2024', farmacia: 'Drogaria Gozer', telefones: ['3727-2164', '99901-0394'] },
        { semana: '13/12/2024 a 19/12/2024', farmacia: 'Farmácia do Simão', telefones: ['3727-0052', '99947-3746'] },
        { semana: '20/12/2024 a 26/12/2024', farmacia: 'Farma Prata', telefones: ['3727-4775', '99902-5559'] },
        { semana: '27/12/2024 a 02/01/2025', farmacia: 'Farmácia Orletti', telefones: ['3727-1442', '99912-0913'] },
        // Adicione mais farmácias conforme necessário
    ];
    // Obtém a data atual no formato "DD/MM/AAAA"
    const dataAtual = new Date();
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    // Seleciona o elemento onde a lista será adicionada
    const farmaciasList = document.getElementById('farmacias-list');

    // Encontrar a farmácia ativa
    let farmaciaAtivaIndex = -1;
    farmacias.forEach((farmacia, index) => {
        const inicioPlantao = new Date(
            farmacia.semana.split(' ')[0].replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3')
        );
        const fimPlantao = new Date(
            farmacia.semana.split(' ')[2].replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3')
        );

        if (dataAtual >= inicioPlantao && dataAtual <= fimPlantao) {
            farmaciaAtivaIndex = index;
        }
    });


    // Itera sobre as farmácias e adiciona à lista
    farmacias.forEach((farmacia, index) => {
        const farmaciaDiv = document.createElement('div');
        farmaciaDiv.classList.add('farmacia');

        const semanaHeading = document.createElement('h2');
        semanaHeading.textContent = farmacia.semana;

        farmaciaDiv.appendChild(semanaHeading);

        if (farmacia.farmacia !== '') {
            const farmaciaNome = document.createElement('h2');
            farmaciaNome.textContent = farmacia.farmacia;
            farmaciaDiv.appendChild(farmaciaNome);
        }

        const telefonesList = document.createElement('ul');
        farmacia.telefones.forEach(telefone => {
            const telefoneItem = document.createElement('li');
            telefoneItem.textContent = telefone;
            telefonesList.appendChild(telefoneItem);
        });

        farmaciaDiv.appendChild(telefonesList);

        if (index === farmaciaAtivaIndex) {
            farmaciaDiv.classList.add('farmacia-ativa');
        }

        farmaciasList.appendChild(farmaciaDiv);
    });

    // Rolar para a farmácia ativa
    if (farmaciaAtivaIndex !== -1) {
        const farmaciaAtiva = document.querySelectorAll('.farmacia')[farmaciaAtivaIndex];
        farmaciaAtiva.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center', marginTop: 50 });
    }
});
// Verifica se é um dispositivo móvel
const isMobile = window.innerWidth <= 500; // Adapte conforme necessário

// Adiciona evento de clique às farmácias
const farmaciasDivs = document.querySelectorAll('.farmacia');
farmaciasDivs.forEach((farmaciaDiv, index) => {
    farmaciaDiv.addEventListener('click', function () {
        if (isMobile) {
            // Abre o modal apenas em dispositivos móveis
            openModal(index);
        } else {
            // Em desktop, realiza a ação diretamente (pode ser redirecionamento para uma página de contato)
            // Neste exemplo, abre um alert
            alert('Ação direta em desktop');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {

    // Função para abrir o modal
    function openModal(index) {
        const modal = document.getElementById('myModal');
        const ligarBtn = document.getElementById('ligarBtn');
        const whatsappBtn = document.getElementById('whatsappBtn');
        const farmacia = farmacias[index];

        // Adiciona ação de ligar
        ligarBtn.addEventListener('click', function () {
            const telefone = farmacia.telefones[0]; // Assume que o primeiro telefone é o principal
            window.location.href = `tel:${telefone}`;
        });

        // Adiciona ação do WhatsApp
        whatsappBtn.addEventListener('click', function () {
            const telefone = farmacia.telefones[0]; // Assume que o primeiro telefone é o principal
            window.location.href = `https://api.whatsapp.com/send?phone=${telefone}`;
        });

        // Adiciona evento para fechar o modal
        const closeModal = document.querySelector('.close');
        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        // Exibe o modal
        modal.style.display = 'block';
    }
});