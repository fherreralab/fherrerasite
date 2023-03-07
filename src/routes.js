import { createRouter, createWebHistory } from 'vue-router'

import CavityQuantum from './pages/publicationsLanding/CavityQuantum.vue';
import MofCommunication from './pages/publicationsLanding/MofCommunication.vue';
import QuantumControlUltracold from './pages/publicationsLanding/QuantumControlUltracold.vue';
import PublicationsPage from './pages/publications/PublicationsPage.vue';
import MiroPage from './pages/MiroPage.vue';
import LandingPage from './components/LandingPage.vue';
import PeoplePage from './pages/people/PeoplePage.vue';
import OpeningsPage from './pages/openings/OpeningsPage.vue';
import ResourcesPage from './pages/resources/ResourcesPage.vue';
import GroupNews from './pages/group_news/GroupNews.vue';

import StanfordRicky from './pages/group_news/news/farewell/StanfordRicky.vue';
import VanessaOlaya from './pages/group_news/news/farewell/VanessaOlaya.vue';
import IgnacioChi from './pages/group_news/news/farewell/IgnacioChi.vue';
import JonathanSepulveda from './pages/group_news/news/farewell/JonathanSepulveda.vue';

import MqtSubmission from './pages/group_news/news/congrats/MqtSubmission.vue';
import FelipeEditorialAdvisoryBoard from './pages/group_news/news/congrats/FelipeEditorialAdvisoryBoard.vue';
import MolecularPolariton from './pages/group_news/news/congrats/MolecularPolariton.vue';
import JohanFedericoAwardedFondecytPostdoc from './pages/group_news/news/congrats/JohanFedericoAwardedFondecytPostdoc.vue';
import FedericoHernandezReceivesPrize from './pages/group_news/news/congrats/FedericoHernandezReceivesPrize.vue';
import IgnacioChiReceivesFullBrightConycit from './pages/group_news/news/congrats/IgnacioChiReceivesFullBrightConycit.vue';

import FelipeFondecytGrant from './pages/group_news/news/grants/FelipeFondecytGrant.vue';
import FelipeCoFounderMilenniumInstitute from './pages/group_news/news/grants/FelipeCoFounderMilenniumInstitute.vue';
import FelipeWinsRegularGrantConicyt from './pages/group_news/news/grants/FelipeWinsRegularGrantConicyt.vue';
import FelipeWinsRedesTravelGrant from './pages/group_news/news/grants/FelipeWinsRedesTravelGrant.vue';

import MelissaJoins from './pages/group_news/news/welcome/MelissaJoins.vue';
import BastianJoins from './pages/group_news/news/welcome/BastianJoins.vue';
import WelcomeThulasiBikku from './pages/group_news/news/welcome/WelcomeThulasiBikku.vue';
import KatyArauchanJoins from './pages/group_news/news/welcome/KatyArauchanJoins.vue';
import ShavanasShajahanReturns from './pages/group_news/news/welcome/ShavanasShajahanReturns.vue';
import JohanTrianaJoins from './pages/group_news/news/welcome/JohanTrianaJoins.vue';
import MauricioAriasJoins from './pages/group_news/news/welcome/MauricioAriasJoins.vue';
import DrFedericoHernandezJoins from './pages/group_news/news/welcome/DrFedericoHernandezJoins.vue';
import RubenFritzJoins from './pages/group_news/news/welcome/RubenFritzJoins.vue';

import GastonDefendsMasterThesis from './pages/group_news/news/graduation/GastonDefendsMasterThesis.vue';
import FelipeDefendsMasterThesis from './pages/group_news/news/graduation/FelipeDefendsMasterThesis.vue';
import SimonPaivaUndergradThesis from './pages/group_news/news/graduation/SimonPaivaUndergradThesis.vue';
import JonathanSepulvedaDefensMasterThesis from './pages/group_news/news/graduation/JonathanSepulvedaDefensMasterThesis.vue';
import VanessaOlayaDefensMasterThesis from './pages/group_news/news/graduation/VanessaOlayaDefensMasterThesis.vue';
import IvanJaraDefendsUndergradThesis from './pages/group_news/news/graduation/IvanJaraDefendsUndergradThesis.vue';
import GastonGonzalezDefendsUndergradThesis from './pages/group_news/news/graduation/GastonGonzalezDefendsUndergradThesis.vue';
import FelipeRecabalDefendsUndergradThesis from './pages/group_news/news/graduation/FelipeRecabalDefendsUndergradThesis.vue';
import DiegoCarvajalDefendsUndergradThesis from './pages/group_news/news/graduation/DiegoCarvajalDefendsUndergradThesis.vue';
import JonathanSepulvedaDefendsUndergradThesis from './pages/group_news/news/graduation/JonathanSepulvedaDefendsUndergradThesis.vue';

import PostDocOpeningMOFDiscovery from './pages/group_news/news/jobs/PostDocOpeningMOFDiscovery.vue';
import PostDocOpeningQuantumCryptography from './pages/group_news/news/jobs/PostDocOpeningQuantumCryptography.vue';
import PostDocOpeningOrganicMaterialsSCS from './pages/group_news/news/jobs/PostDocOpeningOrganicMaterialsSCS.vue';

import FirstWorkshopMQT from './pages/group_news/news/events/FirstWorkshopMQT.vue';

const routes = [
    {
        path: '/',
        name: 'landing',
        component: LandingPage
    },

    {
        path: '/organic-qed',
        name: 'organic-qed',
        component: CavityQuantum
    },

    {
        path: '/mof-nlo',
        name: 'mof-nlo',
        component: MofCommunication
    },
    {
        path: '/cold-molecules',
        name: 'cold-molecules',
        component: QuantumControlUltracold
    },
    {
        path: '/miro',
        name: 'MIRO',
        component: MiroPage
    },
    {
        path: '/publications',
        name: 'publications',
        component: PublicationsPage
    },
    {
        path: '/people',
        name: 'people',
        component: PeoplePage
    },
    {
        path: '/openings',
        name: 'openings',
        component: OpeningsPage
    },
    {
        path: '/news',
        name: 'news',
        component: GroupNews
    },
    {
        path: '/resources',
        name: 'resources',
        component: ResourcesPage
    },

    // news pages routes
    {
        path: '/farewell-2022-08-24-Stanford-undergrad-Ricky-Parada-ends-research-stay-at-USACH',
        name: 'StanfordRicky',
        component: StanfordRicky
    },
    {
        path: '/farewell-2021-12-30-Vanessa-Olaya-starts-her-PhD-in-Sydney',
        name: 'VanessaOlaya',
        component: VanessaOlaya
    },
    {
        path: '/congrats-2022-06-01-MQT2022-is-open-for-submission',
        name: 'MQTSubmission',
        component: MqtSubmission
    },
    {
        path: '/grants-2022-01-15-Felipe-receives-Fondecyt-Grant',
        name: 'FelipeFondecytGrant',
        component: FelipeFondecytGrant
    },
    {
        path: '/congrats-2022-01-15-Felipe-Herrera-joins-Editorial-Advisory-Board-at-The-Journal-of-Chemical-Physics',
        name: 'FelipeEditorialAdvisoryBoard',
        component: FelipeEditorialAdvisoryBoard
    },
    {
        path: '/welcome-2021-08-10-Undergrad-student-Melissa-Silva-joins-our-group',
        name: 'MelissaJoins',
        component: MelissaJoins
    },
    {
        path: '/welcome-2021-08-10-Undergrad-student-Bastian-Martinez-joins-our-group',
        name: 'BastianJoins',
        component: BastianJoins
    },
    {
        path: '/graduation-2021-05-31-Gastón-González-defends-his-MSc-thesis-in-physics',
        name: 'GastonDefendsMasterThesis',
        component: GastonDefendsMasterThesis
    },
    {
        path: '/graduation-2021-04-27-Felipe-Recabal-defends-his-MSc-thesis-in-physics',
        name: 'FelipeDefendsMasterThesis',
        component: FelipeDefendsMasterThesis
    },
    {
        path: '/congrats-2021-03-15-Molecular-polaritons-perspective-is-most-read-article-in-JCP',
        name: 'MolecularPolariton',
        component: MolecularPolariton
    },
    {
        path: '/farewell-2020-12-28-Ignacio-Chi-leaves-the-group-to-pursue-his-PhD',
        name: 'IgnacioChi',
        component: IgnacioChi
    },
    {
        path: '/farewell-2020-12-10-Jonathan-Sepulveda-leaves-the-group-to-pursue-his-PhD',
        name: 'JonathanSepulveda',
        component: JonathanSepulveda
    },
    {
        path: '/welcome-2020-11-01-Dr-Thulasi-Bikku-joins-our-group-as-a-postdoc',
        name: 'WelcomeThulasiBikku',
        component: WelcomeThulasiBikku
    },
    {
        path: '/graduation-2020-07-24-Simón-Paiva-graduates-in-Engineering-Physics',
        name: 'SimonPaivaUndergradThesis',
        component: SimonPaivaUndergradThesis
    },
    {
        path: '/graduation-2020-07-21-Jonathan-Sepulveda-defends-his-MSc-thesis-in-physics',
        name: 'JonathanSepulvedaDefensMasterThesis',
        component: JonathanSepulvedaDefensMasterThesis
    },
    {
        path: '/graduation-2020-04-04-Vanessa-Olaya-receives-her-MSc-degree-in-physics',
        name: 'VanessaOlayaDefensMasterThesis',
        component: VanessaOlayaDefensMasterThesis
    },
    {
        path: '/welcome-2020-03-16-Katy-Aruachan-becomes-the-first-PhD-student-in-our-group',
        name: 'KatyArauchanJoins',
        component: KatyArauchanJoins
    },
    {
        path: '/jobs-2020-03-15-Postdoctoral-opening-on-machine-learning-for-MOF-discovery',
        name: 'PostDocOpeningMOFDiscovery',
        component: PostDocOpeningMOFDiscovery
    },
    {
        path: '/welcome-2020-03-12-Shanavas-returns-to-Periyar-University-after-PhD-visit',
        name: 'ShavanasShajahanReturns',
        component: ShavanasShajahanReturns
    },
    {
        path: '/congrats-2019-12-16-Federico-and-Johan-win-Fondecyt-postdoctoral-fellowship',
        name: 'JohanFedericoAwardedFondecytPostdoc',
        component: JohanFedericoAwardedFondecytPostdoc
    },
    {
        path: '/congrats-2019-11-10-Dr-Federico-Hernandez-receives-thesis-prize',
        name: 'FedericoHernandezReceivesPrize',
        component: FedericoHernandezReceivesPrize
    },
    {
        path: '/welcome-2019-06/10-Dr-Johan-Triana-joins-our-group-as-a-postdoc',
        name: 'JohanTrianaJoins',
        component: JohanTrianaJoins
    },
    {
        path: '/welcome-2019-06-01-Mauricio-Arias-visits-our-group-from-UdeC',
        name: 'MauricioAriasJoins',
        component: MauricioAriasJoins
    },
    {
        path: '/graduation-2019-05-29-Ivan-Jara-receives-his-BSc-in-Engineering-Physics-copy',
        name: 'IvanJaraDefendsUndergradThesis',
        component: IvanJaraDefendsUndergradThesis
    },
    {
        path: '/graduation-2019-05-03-Gaston-Gonzalez-receives-his-BSc-in-Engineering-Physics',
        name: 'GastonGonzalezDefendsUndergradThesis',
        component: GastonGonzalezDefendsUndergradThesis
    },
    {
        path: '/graduation-2019-01-22-Felipe-Recabal-receives-his-BSc-in-Engineering-Physics',
        name: 'FelipeRecabalDefendsUndergradThesis',
        component: FelipeRecabalDefendsUndergradThesis
    },
    {
        path: '/welcome-2019-01-05-Dr-Federico-Hernández-joins-our-group-as-a-postdoc',
        name: 'DrFedericoHernandezJoins',
        component: DrFedericoHernandezJoins
    },
    {
        path: '/graduation-2018-12-01-Diego-Carvajal-obtains-his-BSc-in-Engineering-Mathematics',
        name: 'DiegoCarvajalDefendsUndergradThesis',
        component: DiegoCarvajalDefendsUndergradThesis
    },
    {
        path: '/congrats-2018-10-06-Ignacio-Chi-receives-Fullbright-Scholarship-for-PhD-in-the-US',
        name: 'IgnacioChiReceivesFullBrightConycit',
        component: IgnacioChiReceivesFullBrightConycit
    },
    {
        path: '/events-2018-08-30-1st-Workshop-on-Molecular-Quantum-Technology-will-happen-in-Chile',
        name: 'FirstWorkshopMQT',
        component: FirstWorkshopMQT
    },
    {
        path: '/welcome-2018-08-16-Ruben-Fritz-joins-our-group',
        name: 'RubenFritzJoins',
        component: RubenFritzJoins
    },
    {
        path: '/jobs/2018/05/11/postdoc-position-compchem',
        name: 'PostDocOpeningQuantumCryptography',
        component: PostDocOpeningQuantumCryptography
    },
    {
        path: '/jobs-2018-05-10-postdoc-position-organicQED',
        name: 'PostDocOpeningOrganicMaterialsSCS',
        component: PostDocOpeningOrganicMaterialsSCS
    },
    {
        path: '/graduation-2018-05-03-Jonathan-receives-his-BSc-in-Engineering-Physics',
        name: 'JonathanSepulvedaDefendsUndergradThesis',
        component: JonathanSepulvedaDefendsUndergradThesis
    },
    {
        path: '/grants-2018-01-05-Millenium-Institute-for-Research-in-Optics-gets-funded',
        name: 'FelipeCoFounderMilenniumInstitute',
        component: FelipeCoFounderMilenniumInstitute
    },
    {
        path: '/grants-2017-12-31-Felipe-Herrera-wins-Fondecyt-Regular-Grant',
        name: 'FelipeWinsRegularGrantConicyt',
        component: FelipeWinsRegularGrantConicyt
    },
    {
        path: '/grants-2017-12-25-Felipe-Herrera-wins-PCI-Travel-Grant',
        name: 'FelipeWinsRedesTravelGrant',
        component: FelipeWinsRedesTravelGrant
    },

    {
        path: '/:catchAll(.*)', redirect: '/'

    }
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    mode: 'history',
    routes, // short for `routes: routes`
});

export default router;