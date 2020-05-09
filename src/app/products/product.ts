export interface Product {
    active: boolean,
    categoryRefId: string,
    created: string, // datetime
    dateModified: string, // datetime
    description: string,
    diameter: number, //double
    docRef: string,
    freeShipping: boolean,
    height: number, //double
    id: number, //int64
    ident: string,
    isCompleteStock: boolean,
    isNew: boolean,
    isSale: boolean,
    lastSyncDate: string, //($date-time)
    length: number, //($double)
    manufacturerId: number, //($int64)
    manufacturerName: string,
    manufacturerRefId: string,
    minimum: number //($int32)
    name: string
    nextAvailability: string //($date-time)
    numQuestions: number //($int32)
    numTotalSales: number //($int32)
    overStockLimit: number //($int32)
    price: number //($double)
    saleDiscount: number //($double)
    salePrice: number //($double)
    storeId: number //integer($int64)
    storeLatitude: number //($double)
    storeLongitude: number //($double)
    storeName: string
    storePlanId: number //($int64)
    storePlanName: string
    storePlanRefId: string
    storeRefId: string
    totalEvaluations: number //integer($int32)
    totalViews: number //integer($int32)
    urlYoutubeVideo: string
    usedSince: string //($date)
    weight: number //($double)
    width: number //($double)
}