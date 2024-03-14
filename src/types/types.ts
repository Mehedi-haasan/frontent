type Location = {
    lat: number
    lon: number
}

export type UserData = {
    data: any[];
    id: string;
    userName: string;
    owner: string;
    phoneNo: string | null;
    event: object;
    firstName: string;
    lastName: string;
    fullName: string;
    userType: string | null;
    email: string;
    imageUrl: string | null;
    createdAt: string;
    updatedAt: string;
    nid: string;
    dob: string;
    gender: any;
};



export interface EventData {
    id: string;
    title: string;
    organizerID: string;
    eventDay: string;
    eventSummery: string;
    facebookUrl: string;
    instaUrl: string;
    tweeterUrl: string;
    address: string;
    eventDate:string;
    eventCity:string;

    linkedinUrl: string;
    organizer: UserData
    eventSchedules: {
        items: EventSchedule[];
        nextToken: string;
    };
    eventContents: {
        items: EventContent[];
        nextToken: string;
    };
    eventArtists: {
        items: EventArtist[];
        nextToken: string;
    };
    isSameTicketForAllDay: boolean;
    tickets: {
        items: Ticket[];
        nextToken: string;
    };
    eventType: string;
    minAge: number;
    isActive: boolean;
    eventPhoneNo: string;
    eventPolicy: string;
    createdAt: string;
    updatedAt: string;
    owner: string;
    contentUrl: string | undefined;
    createdByID: string;
    eventCategory: string;
    ticketPromotions: {
        items: TicketPromotion[],
        nextToken: string;
    };
    ticketCoupons: {
        items: Coupon[],
        nextToken: string;
    };
    eventSponsors: {
        items: EventSponsor[],
        nextToken: string;
    };
    userInteresteStatus: {
        items: EventInterest[],
        nextToken: string;
    };
    isUpComing: boolean;
    isSamePromotionForAllDay: boolean;
    isSameCouponForAllDay: boolean;
    totalInterested: number;
    eventWillBe: string;
    eventStatus: string;
    maxTicketByUser: number;
    maxTicketInSingleCheckout: number;
    hasReEntry: boolean;
    isTicketActive: boolean;
    ticketActivationDate: string;
    ticketDeActivationDate: string;
    isUserInfoRequiredForEach: boolean;
    userRequiredInfo: string;
}

export interface EventContent {
    id: string;
    eventID: string;
    contentType: string;
    contentUrl: string;
    isSlider: boolean;
    isMain: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    owner: string;
}

export interface EventInterest {
    id: string;
    eventID: string;
    event: EventData;
    UserID: string;
    user: UserData;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface EventSchedule {
    id: string;
    eventID: string;
    eventDate: string;
    eventAgeGroup: string;
    eventDuration: string;
    eventStartTime: string;
    gateCloseTime: string;
    eventCity: string;
    address: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    owner: string;
    tickets: {
        items: Ticket[]
    };
    eventArtists: {
        items: EventArtist[];
        nextToken: string;
    };
    ticketPromotions:{
        items: TicketPromotion[],
        nextToken: string;
    };
    ticketCoupons: {
        items: Coupon[],
        nextToken: string;
    };
    scheduleTitle:string
    gateOpenTime: string
    location:Location
    venue:string
}

export interface EventArtist {
    id: string;
    eventID: string;
    artistName: string;
    artistTitle: string;
    artistBio: string;
    artistUrl: string;
    artistImageUrl: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    owner: string;
}

export interface EventSponsor {
    id:string;
    eventID:string;
    sponsorName: string;
    sponsorType:string;
    sponsorBio: string;
    sponsorUrl: string;
    sponsorImageUrl:string;
    isActive:boolean;
    createdAt:string;
    updatedAt: string;
}

export interface Ticket {
    id:string;
    eventID:string;
    eventScheduleID: string;
    ticketType: string;
    ticketSales: {
        items: [],
        nextToken: string;
    };
    ticketPrice:string;
    totalTicket: number;
    totalSold: number;
    createdAt:string;
    updatedAt: string;
}

export interface TicketPromotion {
    id:string;
    eventID:string;
    eventScheduleID: string;
    discountAmount:number;
    ispersent: boolean;
    isActive:boolean;
    activationDate: string;
    deActivationDate: string;
    createdAt:string;
    updatedAt: string;
}

export interface Coupon {
    activationDate: string;
    couponCode: string;
    deActivationDate: string;
    discountAmount: number;
    id: string;
    isActive: boolean;
    ispersent: boolean;
    maxUsedInTotal: number;
    maxUsedbyUser: number;
    totalUsed: number;
    eventID:string;
    eventScheduleID: string
    createdAt:string
    updatedAt: string;
}

export interface TicketUsedCoupon {
    id:string;
    eventID:string;
    eventScheduleID: string;
    userID: string;
    couponID: string;
    ticketID: string;
    ticketSaleID: string;
    ticketSaleSingleID: string;
    createdAt:string;
    updatedAt: string;
}

export interface TicketSaleMaster {
    id:string;
    eventID:string;
    event:   EventData;
    eventScheduleID: string;
    ticketSales: {
        items: TicketSale[],
        nextToken: string;
    };
    userID: string;
    user: UserData;
    totalTicket:number;
    totalPrice: number;
    paymentMethod: string;
    isActive:boolean;
    createdAt:string;
    updatedAt: string;
}


export interface TicketSale {
    id:string;
    eventID:string;
    eventScheduleID: string;
    ticketSaleMasterID: string;
    ticketSaleSingles: {
        items: TicketSaleSingle[],
        nextToken: string;
    };
    ticketID: string;
    userID: string;
    totalTicket:number;
    totalPrice: number;
    isActive:boolean;
    createdAt:string;
    updatedAt: string;
}

export interface TicketSaleSingle {
    id:string;
    eventID:string;
    ticketID: string;
    userID: string;
    ticketSaleID: string;
    ticketCode:string;
    ticketUser: any;
    ticketPrice: number;
    isEntryDone: boolean;
    isActive:boolean;
    createdAt:string;
    updatedAt: string;
}

export interface Organizer {
    id: string;
    userName: string;
    owner: string;
    phoneNo: string;
    firstName: string;
    lastName: string;
    fullName: string;
    userType: string;
    email: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
}


export type FormValues = {
    email: string;
    phone: string;
    password: string;
    firstName: string;
    lastName: string;
    rePassword: string;
    code: string;
};

export type User = {
    email: string;
    phone: string;
    password: string;
    firstName: string;
    lastName: string;
    fullName: string;
    userID: string;
}


