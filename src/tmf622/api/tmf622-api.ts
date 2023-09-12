/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Agreement reference. An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications. */
export interface AgreementItemRef {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Identifier of the agreement */
  agreementItemId?: string;
  /** Name of the related entity. */
  name?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** Agreement reference. An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications. */
export interface AgreementRef {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the agreement */
  name?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** Refers an appointment, such as a Customer presentation or internal meeting or site visit */
export interface AppointmentRef {
  /** The identifier of the referred appointment */
  id: string;
  /** The reference of the appointment */
  href?: string;
  /** An explanatory text regarding the appointment made with a party */
  description?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation */
  "@referredType"?: string;
}

/** BillingAccount reference. A BillingAccount is a detailed description of a bill structure. */
export interface BillingAccountRef {
  /** Unique identifier of the billing account */
  id: string;
  /** Reference of the billing account */
  href?: string;
  /** Name of the billing account */
  name?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** A Order cancel is a type of task which  can  be used to place a request to cancel an order */
export interface CancelOrder {
  /** id of the cancellation request (this is not an order id) */
  id?: string;
  /** Hyperlink to access the cancellation request */
  href?: string;
  /** Reason why the order is cancelled. */
  cancellationReason?: string;
  /**
   * Date when the order is cancelled.
   * @format date-time
   */
  effectiveCancellationDate?: string;
  /**
   * Date when the submitter wants the order to be cancelled
   * @format date-time
   */
  requestedCancellationDate?: string;
  /** Tracks the lifecycle status of the cancellation request, such as Acknowledged, Rejected, InProgress, Pending and so on. */
  state?: TaskStateType;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** Request for cancellation an existing product order */
export interface CancelProductOrder {
  /** id of the cancellation request (this is not an order id) */
  id?: string;
  /** Hyperlink to access the cancellation request */
  href?: string;
  /** Reason why the order is cancelled. */
  cancellationReason?: string;
  /**
   * Date when the order is cancelled.
   * @format date-time
   */
  effectiveCancellationDate?: string;
  /**
   * Date when the submitter wants the order to be cancelled
   * @format date-time
   */
  requestedCancellationDate?: string;
  /** ProductOrder (ProductOrder) .The product order which the recommendation is related with. */
  productOrder: ProductOrderRef;
  /** Tracks the lifecycle status of the cancellation request, such as Acknowledged, Rejected, InProgress, Pending and so on. */
  state?: TaskStateType;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/**
 * Request for cancellation an existing product order
 * Skipped properties: id,href,state,effectiveCancellationDate
 */
export interface CancelProductOrderCreate {
  /** Reason why the order is cancelled. */
  cancellationReason?: string;
  /**
   * Date when the submitter wants the order to be cancelled
   * @format date-time
   */
  requestedCancellationDate?: string;
  /** ProductOrder (ProductOrder) .The product order which the recommendation is related with. */
  productOrder: ProductOrderRef;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** Describes a given characteristic of an object or entity through a name/value pair. */
export interface Characteristic {
  /** Name of the characteristic */
  name: string;
  /** Data type of the value of the characteristic */
  valueType?: string;
  /** The value of the characteristic */
  value: any;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** Entity reference schema to be use for all entityRef class. */
export interface EntityRef {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the related entity. */
  name?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** A base / value business entity used to represent money */
export interface Money {
  /** Currency (ISO4217 norm uses 3 letters to define the currency) */
  unit?: string;
  /**
   * A positive floating point number
   * @format float
   */
  value?: number;
}

/** Extra information about a given entity */
export interface Note {
  /** Identifier of the note within its containing entity (may or may not be globally unique, depending on provider implementation) */
  id?: string;
  /** Author of the note */
  author?: string;
  /**
   * Date of the note
   * @format date-time
   */
  date?: string;
  /** Text of the note */
  text: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** action to be performed on the product */
export enum OrderItemActionType {
  Add = "add",
  Modify = "modify",
  Delete = "delete",
  NoChange = "noChange",
}

export interface OrderItemRelationship {
  id?: string;
  /** The type of order item relationship */
  relationshipType?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** An amount, usually of money, that represents the actual price paid by the Customer for this item or this order */
export interface OrderPrice {
  /** A narrative that explains in detail the semantics of this order item price. */
  description?: string;
  /** A short descriptive name such as "Subscription price". */
  name?: string;
  /** A category that describes the price, such as recurring, discount, allowance, penalty, and so forth */
  priceType?: string;
  /** Could be month, week... */
  recurringChargePeriod?: string;
  /** Could be minutes, GB... */
  unitOfMeasure?: string;
  /** A reference to a billing account used for paid the order price charge */
  billingAccount?: BillingAccountRef;
  /** a structure used to define price amount */
  price?: Price;
  /** a strucuture used to describe a price alteration */
  priceAlteration?: PriceAlteration[];
  /** An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased. The price is valid for a defined period of time. */
  productOfferingPrice?: ProductOfferingPriceRef;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** Description of a productTerm linked to this orderItem. This represent a commitment with a duration */
export interface OrderTerm {
  /** Description of the productOrderTerm */
  description?: string;
  /** Name of the productOrderTerm */
  name?: string;
  /** Duration of the productOrderTerm */
  duration?: Quantity;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** If an immediate payment has been done at the product order submission, the payment information are captured and stored (as a reference) in the order. */
export interface PaymentRef {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** A name for the payment */
  name?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** Place reference. Place defines the places where the products are sold or delivered. */
export interface Place {
  /** Unique identifier of the place */
  id?: string;
  /** Unique reference of the place */
  href?: string;
  /** A user-friendly name for the place, such as [Paris Store], [London Store], [Main Home] */
  name?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** Place reference. PlaceRef defines the placeRefs where the products are sold or delivered. */
export interface PlaceRef {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the related entity. */
  name?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** Provides all amounts (tax included, duty free, tax rate), used currency and percentage to apply for Price Alteration. */
export interface Price {
  /**
   * Percentage to apply for ProdOfferPriceAlteration
   * @format float
   */
  percentage?: number;
  /**
   * Tax rate
   * @format float
   */
  taxRate?: number;
  /** All taxes excluded amount (expressed in the given currency) */
  dutyFreeAmount?: Money;
  /** All taxes included amount (expressed in the given currency) */
  taxIncludedAmount?: Money;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** Is an amount, usually of money, that modifies the price charged for an order item. */
export interface PriceAlteration {
  /** Duration during which the alteration applies on the order item price (for instance 2 months free of charge for the recurring charge) */
  applicationDuration?: number;
  /** A narrative that explains in detail the semantics of this order item price alteration */
  description?: string;
  /** Name of the order item price alteration */
  name?: string;
  /** A category that describes the price such as recurring, one time and usage. */
  priceType: string;
  /** Priority level for applying this alteration among all the defined alterations on the order item price */
  priority?: number;
  /** Could be month, week... */
  recurringChargePeriod?: string;
  /** Could be minutes, GB... */
  unitOfMeasure?: string;
  /** Provides all amounts (tax included, duty free, tax rate), used currency and percentage to apply for Price Alteration. */
  price: Price;
  /** ProductPriceOffering reference. An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased */
  productOfferingPrice?: ProductOfferingPriceRef;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** A product offering procured by a customer or other interested party playing a party role. A product is realized as one or more service(s) and / or resource(s). */
export interface Product {
  /** Unique identifier of the product */
  id?: string;
  /** Reference of the product */
  href?: string;
  /** Is the description of the product. It could be copied from the description of the Product Offering. */
  description?: string;
  /** If true, the product is a ProductBundle which is an instantiation of a BundledProductOffering. If false, the product is a ProductComponent which is an instantiation of a SimpleProductOffering. */
  isBundle?: boolean;
  /** If true, the product is visible by the customer. */
  isCustomerVisible?: boolean;
  /** Name of the product. It could be the same as the name of the product offering */
  name?: string;
  /**
   * Is the date when the product was ordered
   * @format date-time
   */
  orderDate?: string;
  /** Is the serial number for the product. This is typically applicable to tangible products e.g. Broadband Router. */
  productSerialNumber?: string;
  /**
   * Is the date from which the product starts
   * @format date-time
   */
  startDate?: string;
  /**
   * Is the date when the product was terminated
   * @format date-time
   */
  terminationDate?: string;
  agreement?: AgreementItemRef[];
  /** BillingAccount reference. A BillingAccount is a detailed description of a bill structure. */
  billingAccount?: BillingAccountRef;
  place?: RelatedPlaceRefOrValue[];
  product?: ProductRefOrValue[];
  productCharacteristic?: Characteristic[];
  /** ProductOffering reference. A product offering represents entities that are orderable from the provider of the catalog, this resource includes pricing information. */
  productOffering?: ProductOfferingRef;
  productOrderItem?: RelatedProductOrderItem[];
  productPrice?: ProductPrice[];
  productRelationship?: ProductRelationship[];
  /** Product specification reference: A ProductSpecification is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role. */
  productSpecification?: ProductSpecificationRef;
  productTerm?: ProductTerm[];
  realizingResource?: ResourceRef[];
  realizingService?: ServiceRef[];
  relatedParty?: RelatedParty[];
  /** Is the lifecycle status of the product. */
  status?: ProductStatusType;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** ProductPriceOffering reference. An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased */
export interface ProductOfferingPriceRef {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the related entity. */
  name?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** It's a productOfferingQualification item that has been executed previously. */
export interface ProductOfferingQualificationItemRef {
  /** Id of an item of a product offering qualification */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the related entity. */
  name?: string;
  /** Reference of the related entity. */
  productOfferingQualificationHref?: string;
  /** Unique identifier of a related entity. */
  productOfferingQualificationId: string;
  /** Name of the related entity. */
  productOfferingQualificationName?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** It's a productOfferingQualification that has been executed previously */
export interface ProductOfferingQualificationRef {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the related entity. */
  name?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** ProductOffering reference. A product offering represents entities that are orderable from the provider of the catalog, this resource includes pricing information. */
export interface ProductOfferingRef {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the related entity. */
  name?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** A Product Order is a type of order which  can  be used to place an order between a customer and a service provider or between a service provider and a partner and vice versa, */
export interface ProductOrder {
  /** ID created on repository side (OM system) */
  id?: string;
  /** Hyperlink to access the order */
  href?: string;
  /**
   * Date when the order is cancelled. This is used when order is cancelled.
   * @format date-time
   */
  cancellationDate?: string;
  /** Reason why the order is cancelled. This is used when order is cancelled.  */
  cancellationReason?: string;
  /** Used to categorize the order from a business perspective that can be useful for the OM system (e.g. "enterprise", "residential", ...) */
  category?: string;
  /**
   * Date when the order was completed
   * @format date-time
   */
  completionDate?: string;
  /** Description of the product order */
  description?: string;
  /**
   * Expected delivery date amended by the provider
   * @format date-time
   */
  expectedCompletionDate?: string;
  /** ID given by the consumer and only understandable by him (to facilitate his searches afterwards) */
  externalId?: string;
  /** Contact attached to the order to send back information regarding this order */
  notificationContact?: string;
  /**
   * Date when the order was created
   * @format date-time
   */
  orderDate?: string;
  /** A way that can be used by consumers to prioritize orders in OM system (from 0 to 4 : 0 is the highest priority, and 4 the lowest) */
  priority?: string;
  /**
   * Requested delivery date from the requestor perspective
   * @format date-time
   */
  requestedCompletionDate?: string;
  /**
   * Order fulfillment start date wished by the requestor. This is used when, for any reason, requestor cannot allow seller to begin to operationally begin the fulfillment before a date.
   * @format date-time
   */
  requestedStartDate?: string;
  /** A reference to an agreement defined in the context of the product order */
  agreement?: AgreementRef[];
  /** BillingAccount reference. A BillingAccount is a detailed description of a bill structure. */
  billingAccount?: BillingAccountRef;
  channel?: RelatedChannel[];
  note?: Note[];
  orderTotalPrice?: OrderPrice[];
  payment?: PaymentRef[];
  productOfferingQualification?: ProductOfferingQualificationRef[];
  /** @minItems 1 */
  productOrderItem: ProductOrderItem[];
  quote?: QuoteRef[];
  relatedParty?: RelatedParty[];
  /** Tracks the lifecycle status of the product order, such as Acknowledged, Rejected, InProgress, Pending and so on. */
  state?: ProductOrderStateType;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/**
 * A Product Order is a type of order which  can  be used to place an order between a customer and a service provider or between a service provider and a partner and vice versa,
 * Skipped properties: id,href,completionDate,orderDate,state,expectedCompletionDate,productOrderItem.state
 */
export interface ProductOrderCreate {
  /**
   * Date when the order is cancelled. This is used when order is cancelled.
   * @format date-time
   */
  cancellationDate?: string;
  /** Reason why the order is cancelled. This is used when order is cancelled.  */
  cancellationReason?: string;
  /** Used to categorize the order from a business perspective that can be useful for the OM system (e.g. "enterprise", "residential", ...) */
  category?: string;
  /** Description of the product order */
  description?: string;
  /** ID given by the consumer and only understandable by him (to facilitate his searches afterwards) */
  externalId?: string;
  /** Contact attached to the order to send back information regarding this order */
  notificationContact?: string;
  /** A way that can be used by consumers to prioritize orders in OM system (from 0 to 4 : 0 is the highest priority, and 4 the lowest) */
  priority?: string;
  /**
   * Requested delivery date from the requestor perspective
   * @format date-time
   */
  requestedCompletionDate?: string;
  /**
   * Order fulfillment start date wished by the requestor. This is used when, for any reason, requestor cannot allow seller to begin to operationally begin the fulfillment before a date.
   * @format date-time
   */
  requestedStartDate?: string;
  /** A reference to an agreement defined in the context of the product order */
  agreement?: AgreementRef[];
  /** BillingAccount reference. A BillingAccount is a detailed description of a bill structure. */
  billingAccount?: BillingAccountRef;
  channel?: RelatedChannel[];
  note?: Note[];
  orderTotalPrice?: OrderPrice[];
  payment?: PaymentRef[];
  productOfferingQualification?: ProductOfferingQualificationRef[];
  /** @minItems 1 */
  productOrderItem: ProductOrderItem[];
  quote?: QuoteRef[];
  relatedParty?: RelatedParty[];
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/**
 * A Product Order is a type of order which  can  be used to place an order between a customer and a service provider or between a service provider and a partner and vice versa,
 * Skipped properties: id,href,orderDate
 */
export interface ProductOrderUpdate {
  /**
   * Date when the order is cancelled. This is used when order is cancelled.
   * @format date-time
   */
  cancellationDate?: string;
  /** Reason why the order is cancelled. This is used when order is cancelled.  */
  cancellationReason?: string;
  /** Used to categorize the order from a business perspective that can be useful for the OM system (e.g. "enterprise", "residential", ...) */
  category?: string;
  /**
   * Date when the order was completed
   * @format date-time
   */
  completionDate?: string;
  /** Description of the product order */
  description?: string;
  /**
   * Expected delivery date amended by the provider
   * @format date-time
   */
  expectedCompletionDate?: string;
  /** ID given by the consumer and only understandable by him (to facilitate his searches afterwards) */
  externalId?: string;
  /** Contact attached to the order to send back information regarding this order */
  notificationContact?: string;
  /** A way that can be used by consumers to prioritize orders in OM system (from 0 to 4 : 0 is the highest priority, and 4 the lowest) */
  priority?: string;
  /**
   * Requested delivery date from the requestor perspective
   * @format date-time
   */
  requestedCompletionDate?: string;
  /**
   * Order fulfillment start date wished by the requestor. This is used when, for any reason, requestor cannot allow seller to begin to operationally begin the fulfillment before a date.
   * @format date-time
   */
  requestedStartDate?: string;
  /** A reference to an agreement defined in the context of the product order */
  agreement?: AgreementRef[];
  /** BillingAccount reference. A BillingAccount is a detailed description of a bill structure. */
  billingAccount?: BillingAccountRef;
  channel?: RelatedChannel[];
  note?: Note[];
  orderTotalPrice?: OrderPrice[];
  payment?: PaymentRef[];
  productOfferingQualification?: ProductOfferingQualificationRef[];
  /** @minItems 1 */
  productOrderItem: ProductOrderItem[];
  quote?: QuoteRef[];
  relatedParty?: RelatedParty[];
  /** Tracks the lifecycle status of the product order, such as Acknowledged, Rejected, InProgress, Pending and so on. */
  state?: ProductOrderStateType;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** An identified part of the order. A product order is decomposed into one or more order items. */
export interface ProductOrderItem {
  /** Identifier of the line item (generally it is a sequence number 01, 02, 03, ...) */
  id: string;
  /** Quantity ordered */
  quantity?: number;
  /** The action to be carried out on the Product. Can be: add, modify, delete, noChange */
  action: OrderItemActionType;
  /** Refers an appointment, such as a Customer presentation or internal meeting or site visit */
  appointment?: AppointmentRef;
  /** BillingAccount reference. A BillingAccount is a detailed description of a bill structure. */
  billingAccount?: BillingAccountRef;
  itemPrice?: OrderPrice[];
  itemTerm?: OrderTerm[];
  itemTotalPrice?: OrderPrice[];
  payment?: PaymentRef[];
  /** A product to be created defined by value or existing defined by reference. The polymorphic attributes @type, @schemaLocation & @referredType are related to the product entity and not the RelatedProductRefOrValue class itself */
  product?: ProductRefOrValue;
  /** ProductOffering reference. A product offering represents entities that are orderable from the provider of the catalog, this resource includes pricing information. */
  productOffering?: ProductOfferingRef;
  /** It's a productOfferingQualification item that has been executed previously. */
  productOfferingQualificationItem?: ProductOfferingQualificationItemRef;
  productOrderItem?: ProductOrderItem[];
  productOrderItemRelationship?: OrderItemRelationship[];
  qualification?: ProductOfferingQualificationRef[];
  /** It's a Quote item that has been executed previously. */
  quoteItem?: QuoteItemRef;
  /** State of the order item : described in the state machine diagram */
  state?: ProductOrderItemStateType;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** Possible values for the state of the product order item */
export enum ProductOrderItemStateType {
  Acknowledged = "acknowledged",
  Rejected = "rejected",
  Pending = "pending",
  Held = "held",
  InProgress = "inProgress",
  Cancelled = "cancelled",
  Completed = "completed",
  Failed = "failed",
  AssessingCancellation = "assessingCancellation",
  PendingCancellation = "pendingCancellation",
}

/** ProductOrder (ProductOrder) .The product order which the recommendation is related with. */
export interface ProductOrderRef {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the related entity. */
  name?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** Possible values for the state of the order */
export enum ProductOrderStateType {
  Acknowledged = "acknowledged",
  Rejected = "rejected",
  Pending = "pending",
  Held = "held",
  InProgress = "inProgress",
  Cancelled = "cancelled",
  Completed = "completed",
  Failed = "failed",
  Partial = "partial",
  AssessingCancellation = "assessingCancellation",
  PendingCancellation = "pendingCancellation",
}

/** An amount, usually of money, that represents the actual price paid by a Customer for a purchase, a rent or a lease of a Product. The price is valid for a defined period of time. */
export interface ProductPrice {
  /** A narrative that explains in detail the semantics of this product price. */
  description?: string;
  /** A short descriptive name such as "Subscription price". */
  name?: string;
  /** A category that describes the price, such as recurring, discount, allowance, penalty, and so forth. */
  priceType: string;
  /** Could be month, week... */
  recurringChargePeriod?: string;
  /** Could be minutes, GB... */
  unitOfMeasure?: string;
  /** BillingAccount reference. A BillingAccount is a detailed description of a bill structure. */
  billingAccount?: BillingAccountRef;
  /** Provides all amounts (tax included, duty free, tax rate), used currency and percentage to apply for Price Alteration. */
  price: Price;
  /** ProductPriceOffering reference. An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased */
  productOfferingPrice?: ProductOfferingPriceRef;
  productPriceAlteration?: PriceAlteration[];
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

export interface ProductRef {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the related entity. */
  name?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** A product to be created defined by value or existing defined by reference. The polymorphic attributes @type, @schemaLocation & @referredType are related to the product entity and not the RelatedProductRefOrValue class itself */
export interface ProductRefOrValue {
  /** Unique identifier of the product */
  id?: string;
  /** Reference of the product */
  href?: string;
  /** Is the description of the product. It could be copied from the description of the Product Offering. */
  description?: string;
  /** If true, the product is a ProductBundle which is an instantiation of a BundledProductOffering. If false, the product is a ProductComponent which is an instantiation of a SimpleProductOffering. */
  isBundle?: boolean;
  /** If true, the product is visible by the customer. */
  isCustomerVisible?: boolean;
  /** Name of the product. It could be the same as the name of the product offering */
  name?: string;
  /**
   * Is the date when the product was ordered
   * @format date-time
   */
  orderDate?: string;
  /** Is the serial number for the product. This is typically applicable to tangible products e.g. Broadband Router. */
  productSerialNumber?: string;
  /**
   * Is the date from which the product starts
   * @format date-time
   */
  startDate?: string;
  /**
   * Is the date when the product was terminated
   * @format date-time
   */
  terminationDate?: string;
  agreement?: AgreementItemRef[];
  /** BillingAccount reference. A BillingAccount is a detailed description of a bill structure. */
  billingAccount?: BillingAccountRef;
  place?: RelatedPlaceRefOrValue[];
  product?: ProductRefOrValue[];
  productCharacteristic?: Characteristic[];
  /** ProductOffering reference. A product offering represents entities that are orderable from the provider of the catalog, this resource includes pricing information. */
  productOffering?: ProductOfferingRef;
  productOrderItem?: RelatedProductOrderItem[];
  productPrice?: ProductPrice[];
  productRelationship?: ProductRelationship[];
  /** Product specification reference: A ProductSpecification is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role. */
  productSpecification?: ProductSpecificationRef;
  productTerm?: ProductTerm[];
  realizingResource?: ResourceRef[];
  realizingService?: ServiceRef[];
  relatedParty?: RelatedParty[];
  /** Is the lifecycle status of the product. */
  status?: ProductStatusType;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** Linked products to the one instantiate, such as [bundled] if the product is a bundle and you want to describe the bundled products inside this bundle; [reliesOn] if the product needs another already owned product to rely on (e.g. an option on an already owned mobile access product) [targets] or [isTargeted] (depending on the way of expressing the link) for any other kind of links that may be useful */
export interface ProductRelationship {
  /** Type of the product relationship, such as [bundled] if the product is a bundle and you want to describe the bundled products inside this bundle; [reliesOn] if the product needs another already owned product to rely on (e.g. an option on an already owned mobile access product) [targets] or [isTargeted] (depending on the way of expressing the link) for any other kind of links that may be useful */
  relationshipType: string;
  /** A product to be created defined by value or existing defined by reference. The polymorphic attributes @type, @schemaLocation & @referredType are related to the product entity and not the RelatedProductRefOrValue class itself */
  product: ProductRefOrValue;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** Product specification reference: A ProductSpecification is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role. */
export interface ProductSpecificationRef {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the related entity. */
  name?: string;
  /** Version of the product specification */
  version?: string;
  /** A target product schema reference. The reference object to the schema and type of target product which is described by product specification. */
  targetProductSchema?: TargetProductSchema;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** Possible values for the status of the product */
export enum ProductStatusType {
  Created = "created",
  PendingActive = "pendingActive",
  Cancelled = "cancelled",
  Active = "active",
  PendingTerminate = "pendingTerminate",
  Terminated = "terminated",
  Suspended = "suspended",
  Aborted = "aborted ",
}

/** Description of a productTerm linked to this product. This represent a commitment with a duration */
export interface ProductTerm {
  /** Description of the productTerm */
  description?: string;
  /** Name of the productTerm */
  name?: string;
  /** Duration of the productTerm */
  duration?: Quantity;
  /** productTerm validity period */
  validFor?: TimePeriod;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
}

/** An amount in a given unit */
export interface Quantity {
  /**
   * Numeric value in a given unit
   * @format float
   * @default 1
   */
  amount?: number;
  /** Unit */
  units?: string;
}

/** It's a Quote item that has been executed previously. */
export interface QuoteItemRef {
  /** Id of an item of a quote */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the related entity. */
  name?: string;
  /** Reference of the related entity. */
  quoteHref?: string;
  /** Unique identifier of a related entity. */
  quoteId: string;
  /** Name of the related entity. */
  quoteName?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** It's a Quote that has been executed previously */
export interface QuoteRef {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the related entity. */
  name?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** Related channel to another entity. May be online web, mobile app, social ,etc. */
export interface RelatedChannel {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the channel. */
  name?: string;
  /** Role playing by the channel. */
  role?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** Related Entity reference. A related party defines party or party role linked to a specific entity. */
export interface RelatedParty {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the related entity. */
  name?: string;
  /** Role played by the related party */
  role?: string;
  /** Family name */
  familyName?: string;
  /** Given name */
  givenName?: string;
  /** Salutation */
  salutation?: string;
  /** Street name */
  street?: string;
  /** Street number */
  streetNumber?: string;
  /** City name */
  city?: string;
  /** Zipcode */
  zipcode?: string;
  /** Country code */
  countryCode?: string;
  /** E-mail address */
  mailaddress?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType": string;
}

/** Related Entity reference. A related place defines a place described by reference or by value linked to a specific entity. The polymorphic attributes @type, @schemaLocation & @referredType are related to the place entity and not the RelatedPlaceRefOrValue class itself */
export interface RelatedPlaceRefOrValue {
  /** Unique identifier of the place */
  id?: string;
  /** Unique reference of the place */
  href?: string;
  /** A user-friendly name for the place, such as [Paris Store], [London Store], [Main Home] */
  name?: string;
  role: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** RelatedProductOrderItem (ProductOrder item) .The product order item which triggered product creation/change/termination. */
export interface RelatedProductOrderItem {
  /** Action of the order item for this product */
  orderItemAction?: string;
  /** Identifier of the order item where the product was managed */
  orderItemId: string;
  /** Reference of the related entity. */
  productOrderHref?: string;
  /** Unique identifier of a related entity. */
  productOrderId: string;
  /** role of the product order item for this product */
  role?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

export interface ResourceRef {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the resource */
  name?: string;
  /** The resource value that can be used to identify a resource with a public key (e.g.: a tel nr, an msisdn) */
  value?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** Service reference, for when Service is used by other entities */
export interface ServiceRef {
  /** Unique identifier of a related entity. */
  id: string;
  /** Reference of the related entity. */
  href?: string;
  /** Name of the related entity. */
  name?: string;
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name */
  "@type"?: string;
  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/** The reference object to the schema and type of target product which is described by product specification */
export interface TargetProductSchema {
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;
  /** This field provides a link to the schema describing the target product */
  "@schemaLocation": string;
  /** Class type of the target product */
  "@type": string;
}

/** Possible values for the state of a task */
export enum TaskStateType {
  Acknowledged = "acknowledged",
  TerminatedWithError = "terminatedWithError",
  InProgress = "inProgress",
  Done = "done",
}

/** A period of time, either as a deadline (endDateTime only) a startDateTime only, or both */
export interface TimePeriod {
  /**
   * End of the time period, using IETC-RFC-3339 format
   * @format date-time
   */
  endDateTime?: string;
  /**
   * Start of the time period, using IETC-RFC-3339 format. If you define a start, you must also define an end
   * @format date-time
   */
  startDateTime?: string;
}

/** Sets the communication endpoint address the service instance must use to deliver notification information */
export interface EventSubscription {
  /** Id of the listener */
  id: string;
  /** The callback being registered. */
  callback: string;
  /** additional data to be passed */
  query?: string;
}

/** Sets the communication endpoint address the service instance must use to deliver notification information */
export interface EventSubscriptionInput {
  /** The callback being registered. */
  callback: string;
  /** additional data to be passed */
  query?: string;
}

/** The notification data structure */
export interface ProductOrderCreateEvent {
  /** Identifier of the Process flow */
  id?: string;
  /** Reference of the ProcessFlow */
  href?: string;
  /** The identifier of the notification. */
  eventId?: string;
  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;
  /** The type of the notification. */
  eventType?: string;
  /** The correlation id for this event. */
  correlationId?: string;
  /** The domain of the event. */
  domain?: string;
  /** The title of the event. */
  title?: string;
  /** An explnatory of the event. */
  description?: string;
  /** A priority. */
  priority?: string;
  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
  /** The event payload linked to the involved resource object */
  event?: ProductOrderCreateEventPayload;
}

/** The event data structure */
export interface ProductOrderCreateEventPayload {
  /** The involved resource data for the event */
  productOrder?: ProductOrder;
}

/** The notification data structure */
export interface ProductOrderAttributeValueChangeEvent {
  /** The identifier of the notification. */
  eventId?: string;
  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;
  /** The type of the notification. */
  eventType?: string;
  /** The correlation id for this event. */
  correlationId?: string;
  /** The domain of the event. */
  domain?: string;
  /** The title of the event. */
  title?: string;
  /** An explnatory of the event. */
  description?: string;
  /** A priority. */
  priority?: string;
  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
  /** The path identifying the object field concerned by this notification. */
  fieldPath?: string;
  /** The event payload linked to the involved resource object */
  event?: ProductOrderAttributeValueChangeEventPayload;
}

/** The event data structure */
export interface ProductOrderAttributeValueChangeEventPayload {
  /** The involved resource data for the event */
  productOrder?: ProductOrder;
}

/** The notification data structure */
export interface ProductOrderDeleteEvent {
  /** Identifier of the Process flow */
  id?: string;
  /** Reference of the ProcessFlow */
  href?: string;
  /** The identifier of the notification. */
  eventId?: string;
  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;
  /** The type of the notification. */
  eventType?: string;
  /** The correlation id for this event. */
  correlationId?: string;
  /** The domain of the event. */
  domain?: string;
  /** The title of the event. */
  title?: string;
  /** An explnatory of the event. */
  description?: string;
  /** A priority. */
  priority?: string;
  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
  /** The event payload linked to the involved resource object */
  event?: ProductOrderDeleteEventPayload;
}

/** The event data structure */
export interface ProductOrderDeleteEventPayload {
  /** The involved resource data for the event */
  productOrder?: ProductOrder;
}

/** The notification data structure */
export interface ProductOrderStateChangeEvent {
  /** Identifier of the Process flow */
  id?: string;
  /** Reference of the ProcessFlow */
  href?: string;
  /** The identifier of the notification. */
  eventId?: string;
  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;
  /** The type of the notification. */
  eventType?: string;
  /** The correlation id for this event. */
  correlationId?: string;
  /** The domain of the event. */
  domain?: string;
  /** The title of the event. */
  title?: string;
  /** An explnatory of the event. */
  description?: string;
  /** A priority. */
  priority?: string;
  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
  /** The event payload linked to the involved resource object */
  event?: ProductOrderStateChangeEventPayload;
}

/** The event data structure */
export interface ProductOrderStateChangeEventPayload {
  /** The involved resource data for the event */
  productOrder?: ProductOrder;
}

/** The notification data structure */
export interface ProductOrderInformationRequiredEvent {
  /** The identifier of the notification. */
  eventId?: string;
  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;
  /** The type of the notification. */
  eventType?: string;
  /** The correlation id for this event. */
  correlationId?: string;
  /** The domain of the event. */
  domain?: string;
  /** The title of the event. */
  title?: string;
  /** An explnatory of the event. */
  description?: string;
  /** A priority. */
  priority?: string;
  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
  /** The path identifying the object field concerned by this notification. */
  fieldPath?: string;
  /** The event payload linked to the involved resource object */
  event?: ProductOrderInformationRequiredEventPayload;
}

/** The event data structure */
export interface ProductOrderInformationRequiredEventPayload {
  /** The involved resource data for the event */
  productOrder?: ProductOrder;
}

/** The notification data structure */
export interface CancelProductOrderCreateEvent {
  /** Identifier of the Process flow */
  id?: string;
  /** Reference of the ProcessFlow */
  href?: string;
  /** The identifier of the notification. */
  eventId?: string;
  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;
  /** The type of the notification. */
  eventType?: string;
  /** The correlation id for this event. */
  correlationId?: string;
  /** The domain of the event. */
  domain?: string;
  /** The title of the event. */
  title?: string;
  /** An explnatory of the event. */
  description?: string;
  /** A priority. */
  priority?: string;
  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
  /** The event payload linked to the involved resource object */
  event?: CancelProductOrderCreateEventPayload;
}

/** The event data structure */
export interface CancelProductOrderCreateEventPayload {
  /** The involved resource data for the event */
  cancelProductOrder?: CancelProductOrder;
}

/** The notification data structure */
export interface CancelProductOrderStateChangeEvent {
  /** Identifier of the Process flow */
  id?: string;
  /** Reference of the ProcessFlow */
  href?: string;
  /** The identifier of the notification. */
  eventId?: string;
  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;
  /** The type of the notification. */
  eventType?: string;
  /** The correlation id for this event. */
  correlationId?: string;
  /** The domain of the event. */
  domain?: string;
  /** The title of the event. */
  title?: string;
  /** An explnatory of the event. */
  description?: string;
  /** A priority. */
  priority?: string;
  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
  /** The event payload linked to the involved resource object */
  event?: CancelProductOrderStateChangeEventPayload;
}

/** The event data structure */
export interface CancelProductOrderStateChangeEventPayload {
  /** The involved resource data for the event */
  cancelProductOrder?: CancelProductOrder;
}

/** The notification data structure */
export interface CancelProductOrderInformationRequiredEvent {
  /** The identifier of the notification. */
  eventId?: string;
  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;
  /** The type of the notification. */
  eventType?: string;
  /** The correlation id for this event. */
  correlationId?: string;
  /** The domain of the event. */
  domain?: string;
  /** The title of the event. */
  title?: string;
  /** An explnatory of the event. */
  description?: string;
  /** A priority. */
  priority?: string;
  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
  /** The path identifying the object field concerned by this notification. */
  fieldPath?: string;
  /** The event payload linked to the involved resource object */
  event?: CancelProductOrderInformationRequiredEventPayload;
}

/** The event data structure */
export interface CancelProductOrderInformationRequiredEventPayload {
  /** The involved resource data for the event */
  cancelProductOrder?: CancelProductOrder;
}

/** Used when an API throws an Error, typically with a HTTP error response-code (3xx, 4xx, 5xx) */
export interface Error {
  /** Application relevant detail, defined in the API or a common list. */
  code: string;
  /** Explanation of the reason for the error which can be shown to a client user. */
  reason: string;
  /** More details and corrective actions related to the error which can be shown to a client user. */
  message?: string;
  /** HTTP Error code extension */
  status?: string;
  /**
   * URI of documentation describing the error.
   * @format uri
   */
  referenceError?: string;
  /** When sub-classing, this defines the super-class. */
  "@baseType"?: string;
  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
  /** When sub-classing, this defines the sub-class entity name. */
  "@type"?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://localhost/ngo/qas/productOrderingManagement/v4";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title TMF 622 - Product Ordering Management
 * @version 4.0.0
 * @license Deutsche Telekom AG
 * @baseUrl https://localhost/ngo/qas/productOrderingManagement/v4
 *
 * **TMF API Reference : TMF 622 - Product Ordering Management**
 *
 * **Release : 19.0 - June 2019**
 *
 * The Product Ordering API provides a standardized mechanism for placing a product order with all of the necessary order parameters. The API consists of a simple set of operations that interact with CRM/Order Negotiation systems in a consistent manner. A product order is created based on a product offer that is defined in a catalog. The product offer identifies the product or set of products that are available to a customer, and includes characteristics such as pricing, product options and market. This API provide a task based resource to request order cancellation.
 *
 * The product order references the product offer and identifies any specific requests made by the customer.
 *
 * **Product Order resource**
 * A Product Order is a type of order which can be used to place an order between a customer and a service provider or between a service provider and a partner and vice versa. Main Product Order attributes are its identifier, state, priority category (mass market, Enterprise, etc.) related dates (start, completion, etc.), related billing account, related parties and order items. Main Order Items (aka order lines) attributes are the ordered offering and product characteristics with the related action to be performed (e.g. add or delete the products), state, location information for delivery, order item price and price alteration.
 *
 * Product Order API performs the following operations on product order :
 *
 *    -Retrieval of a product order or a collection of product orders depending on filter criteria
 *     -Partial update of a product order (including updating rules)
 *    -Creation of a product order (including default values and creation rules)
 *    -Deletion of product order (for administration purposes)
 *     -Notification of events on product order.
 *
 * **cancelProductOrder resource**
 * This resource is used to request a product order cancellation.
 * Product Order API performs the following operations on product order :
 *
 *    -Retrieval of a cancel product order or a collection of cancel product orders
 *    -Creation of a cancel product order
 *    -Notification of events on cancel product order.
 *
 *
 * Copyright © TM Forum 2019. All Rights Reserved
 *
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  productOrder = {
    /**
     * @description This operation list or find ProductOrder entities
     *
     * @tags productOrder
     * @name ListProductOrder
     * @summary List or find ProductOrder objects
     * @request GET:/productOrder
     */
    listProductOrder: (
      query?: {
        /** Comma-separated properties to be provided in response */
        fields?: string;
        /** Requested index for start of resources to be provided in response */
        offset?: number;
        /** Requested number of resources to be provided in response */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductOrder[], Error>({
        path: `/productOrder`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This operation creates a ProductOrder entity.
     *
     * @tags productOrder
     * @name CreateProductOrder
     * @summary Creates a ProductOrder
     * @request POST:/productOrder
     */
    createProductOrder: (productOrder: ProductOrderCreate, params: RequestParams = {}) =>
      this.request<ProductOrder, Error>({
        path: `/productOrder`,
        method: "POST",
        body: productOrder,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This operation retrieves a ProductOrder entity. Attribute selection is enabled for all first level attributes.
     *
     * @tags productOrder
     * @name RetrieveProductOrder
     * @summary Retrieves a ProductOrder by ID
     * @request GET:/productOrder/{id}
     */
    retrieveProductOrder: (
      id: string,
      query?: {
        /** Comma-separated properties to provide in response */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductOrder, Error>({
        path: `/productOrder/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This operation deletes a ProductOrder entity.
     *
     * @tags productOrder
     * @name DeleteProductOrder
     * @summary Deletes a ProductOrder
     * @request DELETE:/productOrder/{id}
     */
    deleteProductOrder: (id: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/productOrder/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description This operation updates partially a ProductOrder entity.
     *
     * @tags productOrder
     * @name PatchProductOrder
     * @summary Updates partially a ProductOrder
     * @request PATCH:/productOrder/{id}
     */
    patchProductOrder: (id: string, productOrder: ProductOrderUpdate, params: RequestParams = {}) =>
      this.request<ProductOrder, Error>({
        path: `/productOrder/${id}`,
        method: "PATCH",
        body: productOrder,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  cancelProductOrder = {
    /**
     * @description This operation list or find CancelProductOrder entities
     *
     * @tags cancelProductOrder
     * @name ListCancelProductOrder
     * @summary List or find CancelProductOrder objects
     * @request GET:/cancelProductOrder
     */
    listCancelProductOrder: (
      query?: {
        /** Comma-separated properties to be provided in response */
        fields?: string;
        /** Requested index for start of resources to be provided in response */
        offset?: number;
        /** Requested number of resources to be provided in response */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CancelProductOrder[], Error>({
        path: `/cancelProductOrder`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This operation creates a CancelProductOrder entity.
     *
     * @tags cancelProductOrder
     * @name CreateCancelProductOrder
     * @summary Creates a CancelProductOrder
     * @request POST:/cancelProductOrder
     */
    createCancelProductOrder: (cancelProductOrder: CancelProductOrderCreate, params: RequestParams = {}) =>
      this.request<CancelProductOrder, Error>({
        path: `/cancelProductOrder`,
        method: "POST",
        body: cancelProductOrder,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This operation retrieves a CancelProductOrder entity. Attribute selection is enabled for all first level attributes.
     *
     * @tags cancelProductOrder
     * @name RetrieveCancelProductOrder
     * @summary Retrieves a CancelProductOrder by ID
     * @request GET:/cancelProductOrder/{id}
     */
    retrieveCancelProductOrder: (
      id: string,
      query?: {
        /** Comma-separated properties to provide in response */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CancelProductOrder, Error>({
        path: `/cancelProductOrder/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  hub = {
    /**
     * @description Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
     *
     * @tags events subscription
     * @name RegisterListener
     * @summary Register a listener
     * @request POST:/hub
     */
    registerListener: (data: EventSubscriptionInput, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/hub`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
     *
     * @tags events subscription
     * @name UnregisterListener
     * @summary Unregister a listener
     * @request DELETE:/hub/{id}
     */
    unregisterListener: (id: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/hub/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  listener = {
    /**
     * @description Example of a client listener for receiving the notification ProductOrderCreateEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductOrderCreateEvent
     * @summary Client listener for entity ProductOrderCreateEvent
     * @request POST:/listener/productOrderCreateEvent
     */
    listenToProductOrderCreateEvent: (data: ProductOrderCreateEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productOrderCreateEvent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOrderAttributeValueChangeEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductOrderAttributeValueChangeEvent
     * @summary Client listener for entity ProductOrderAttributeValueChangeEvent
     * @request POST:/listener/productOrderAttributeValueChangeEvent
     */
    listenToProductOrderAttributeValueChangeEvent: (
      data: ProductOrderAttributeValueChangeEvent,
      params: RequestParams = {},
    ) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productOrderAttributeValueChangeEvent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOrderDeleteEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductOrderDeleteEvent
     * @summary Client listener for entity ProductOrderDeleteEvent
     * @request POST:/listener/productOrderDeleteEvent
     */
    listenToProductOrderDeleteEvent: (data: ProductOrderDeleteEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productOrderDeleteEvent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOrderStateChangeEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductOrderStateChangeEvent
     * @summary Client listener for entity ProductOrderStateChangeEvent
     * @request POST:/listener/productOrderStateChangeEvent
     */
    listenToProductOrderStateChangeEvent: (data: ProductOrderStateChangeEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productOrderStateChangeEvent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOrderInformationRequiredEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductOrderInformationRequiredEvent
     * @summary Client listener for entity ProductOrderInformationRequiredEvent
     * @request POST:/listener/productOrderInformationRequiredEvent
     */
    listenToProductOrderInformationRequiredEvent: (
      data: ProductOrderInformationRequiredEvent,
      params: RequestParams = {},
    ) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productOrderInformationRequiredEvent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification CancelProductOrderCreateEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToCancelProductOrderCreateEvent
     * @summary Client listener for entity CancelProductOrderCreateEvent
     * @request POST:/listener/cancelProductOrderCreateEvent
     */
    listenToCancelProductOrderCreateEvent: (data: CancelProductOrderCreateEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/cancelProductOrderCreateEvent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification CancelProductOrderStateChangeEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToCancelProductOrderStateChangeEvent
     * @summary Client listener for entity CancelProductOrderStateChangeEvent
     * @request POST:/listener/cancelProductOrderStateChangeEvent
     */
    listenToCancelProductOrderStateChangeEvent: (
      data: CancelProductOrderStateChangeEvent,
      params: RequestParams = {},
    ) =>
      this.request<EventSubscription, Error>({
        path: `/listener/cancelProductOrderStateChangeEvent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification CancelProductOrderInformationRequiredEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToCancelProductOrderInformationRequiredEvent
     * @summary Client listener for entity CancelProductOrderInformationRequiredEvent
     * @request POST:/listener/cancelProductOrderInformationRequiredEvent
     */
    listenToCancelProductOrderInformationRequiredEvent: (
      data: CancelProductOrderInformationRequiredEvent,
      params: RequestParams = {},
    ) =>
      this.request<EventSubscription, Error>({
        path: `/listener/cancelProductOrderInformationRequiredEvent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
