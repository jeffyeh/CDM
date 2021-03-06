// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { AttributeResolutionGuidance , EntityReferenceDefinition , PurposeReference, TraitReference } from '.';

export abstract class EntityAttribute {
    public explanation?: string;
    public purpose?: (string | PurposeReference);
    public name: string;
    public entity: string | EntityReferenceDefinition;
    public appliedTraits?: (string | TraitReference)[];
    public resolutionGuidance? : AttributeResolutionGuidance;
}
