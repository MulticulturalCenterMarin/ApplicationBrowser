export const ENTITY_IMAGE_BANNER_ADD_REQUEST = 'ENTITY_IMAGE_BANNER_ADD_REQUEST'
export const ENTITY_IMAGE_BANNER_ADD_SUCCESS = 'ENTITY_IMAGE_BANNER_ADD_SUCCESS'
export const ENTITY_IMAGE_BANNER_ADD_FAILURE = 'ENTITY_IMAGE_BANNER_ADD_FAILURE'


export const ENTITY_PERSON_ADD_REQUEST = 'ENTITY_PERSON_ADD_REQUEST'
export const ENTITY_PERSON_ADD_SUCCESS = 'ENTITY_PERSON_ADD_SUCCESS'
export const ENTITY_PERSON_ADD_FAILURE = 'ENTITY_PERSON_ADD_FAILURE'

export const ENTITY_PERSON_EDIT_REQUEST = 'ENTITY_PERSON_EDIT_REQUEST'
export const ENTITY_PERSON_EDIT_SUCCESS = 'ENTITY_PERSON_EDIT_SUCCESS'
export const ENTITY_PERSON_EDIT_FAILURE = 'ENTITY_PERSON_EDIT_FAILURE'

export const ENTITY_PERSON_DELETE_REQUEST = 'ENTITY_PERSON_DELETE_REQUEST'
export const ENTITY_PERSON_DELETE_SUCCESS = 'ENTITY_PERSON_DELETE_SUCCESS'
export const ENTITY_PERSON_DELETE_FAILURE = 'ENTITY_PERSON_DELETE_FAILURE'

export const ENTITY_ORGANIZATION_ADD_REQUEST = 'ENTITY_ORGANIZATION_ADD_REQUEST'
export const ENTITY_ORGANIZATION_ADD_SUCCESS = 'ENTITY_ORGANIZATION_ADD_SUCCESS'
export const ENTITY_ORGANIZATION_ADD_FAILURE = 'ENTITY_ORGANIZATION_ADD_FAILURE'

export const ENTITY_ORGANIZATION_EDIT_REQUEST = 'ENTITY_ORGANIZATION_EDIT_REQUEST'
export const ENTITY_ORGANIZATION_EDIT_SUCCESS = 'ENTITY_ORGANIZATION_EDIT_SUCCESS'
export const ENTITY_ORGANIZATION_EDIT_FAILURE = 'ENTITY_ORGANIZATION_EDIT_FAILURE'

export const ENTITY_ORGANIZATION_DELETE_REQUEST = 'ENTITY_ORGANIZATION_DELETE_REQUEST'
export const ENTITY_ORGANIZATION_DELETE_SUCCESS = 'ENTITY_ORGANIZATION_DELETE_SUCCESS'
export const ENTITY_ORGANIZATION_DELETE_FAILURE = 'ENTITY_ORGANIZATION_DELETE_FAILURE'

export const ENTITY_PROJECT_ADD_REQUEST = 'ENTITY_PROJECT_ADD_REQUEST'
export const ENTITY_PROJECT_ADD_SUCCESS = 'ENTITY_PROJECT_ADD_SUCCESS'
export const ENTITY_PROJECT_ADD_FAILURE = 'ENTITY_PROJECT_ADD_FAILURE'

export const ENTITY_PROJECT_EDIT_REQUEST = 'ENTITY_PROJECT_EDIT_REQUEST'
export const ENTITY_PROJECT_EDIT_SUCCESS = 'ENTITY_PROJECT_EDIT_SUCCESS'
export const ENTITY_PROJECT_EDIT_FAILURE = 'ENTITY_PROJECT_EDIT_FAILURE'

export const ENTITY_PROJECT_DELETE_REQUEST = 'ENTITY_PROJECT_DELETE_REQUEST'
export const ENTITY_PROJECT_DELETE_SUCCESS = 'ENTITY_PROJECT_DELETE_SUCCESS'
export const ENTITY_PROJECT_DELETE_FAILURE = 'ENTITY_PROJECT_DELETE_FAILURE'

export const ENTITY_TASK_ADD_REQUEST = 'ENTITY_TASK_ADD_REQUEST'
export const ENTITY_TASK_ADD_SUCCESS = 'ENTITY_TASK_ADD_SUCCESS'
export const ENTITY_TASK_ADD_FAILURE = 'ENTITY_TASK_ADD_FAILURE'

export const ENTITY_TASK_EDIT_REQUEST = 'ENTITY_TASK_EDIT_REQUEST'
export const ENTITY_TASK_EDIT_SUCCESS = 'ENTITY_TASK_EDIT_SUCCESS'
export const ENTITY_TASK_EDIT_FAILURE = 'ENTITY_TASK_EDIT_FAILURE'

export const ENTITY_TASK_DELETE_REQUEST = 'ENTITY_TASK_DELETE_REQUEST'
export const ENTITY_TASK_DELETE_SUCCESS = 'ENTITY_TASK_DELETE_SUCCESS'
export const ENTITY_TASK_DELETE_FAILURE = 'ENTITY_TASK_DELETE_FAILURE'

export const ENTITY_RESOURCE_ADD_REQUEST = 'ENTITY_RESOURCE_ADD_REQUEST'
export const ENTITY_RESOURCE_ADD_SUCCESS = 'ENTITY_RESOURCE_ADD_SUCCESS'
export const ENTITY_RESOURCE_ADD_FAILURE = 'ENTITY_RESOURCE_ADD_FAILURE'

export const ENTITY_RESOURCE_EDIT_REQUEST = 'ENTITY_RESOURCE_EDIT_REQUEST'
export const ENTITY_RESOURCE_EDIT_SUCCESS = 'ENTITY_RESOURCE_EDIT_SUCCESS'
export const ENTITY_RESOURCE_EDIT_FAILURE = 'ENTITY_RESOURCE_EDIT_FAILURE'

export const ENTITY_RESOURCE_DELETE_REQUEST = 'ENTITY_RESOURCE_DELETE_REQUEST'
export const ENTITY_RESOURCE_DELETE_SUCCESS = 'ENTITY_RESOURCE_DELETE_SUCCESS'
export const ENTITY_RESOURCE_DELETE_FAILURE = 'ENTITY_RESOURCE_DELETE_FAILURE'

export const ENTITY_BANNER_ADD_REQUEST = 'ENTITY_BANNER_ADD_REQUEST'
export const ENTITY_BANNER_ADD_SUCCESS = 'ENTITY_BANNER_ADD_SUCCESS'
export const ENTITY_BANNER_ADD_FAILURE = 'ENTITY_BANNER_ADD_FAILURE'

// entity :: PersonAdd |  ENTITY_PERSON_ADD
export const entityPersonAddRequest = ({payload, metadata}) => ({
  type: ENTITY_PERSON_ADD_REQUEST,
  payload,
  metadata
})

export const entityPersonAddSuccess = ({payload, metadata}) => ({
  type: ENTITY_PERSON_ADD_SUCCESS,
  payload,
  metadata
})

export const entityPersonAddFailure = ({payload, metadata}) => ({
  type: ENTITY_PERSON_ADD_FAILURE,
  payload,
  metadata
})
  
// entity :: PersonEdit |  ENTITY_PERSON_EDIT
export const entityPersonEditRequest = ({payload, metadata}) => ({
  type: ENTITY_PERSON_EDIT_REQUEST,
  payload,
  metadata
})

export const entityPersonEditSuccess = ({payload, metadata}) => ({
  type: ENTITY_PERSON_EDIT_SUCCESS,
  payload,
  metadata
})

export const entityPersonEditFailure = ({payload, metadata}) => ({
  type: ENTITY_PERSON_EDIT_FAILURE,
  payload,
  metadata
})
  
// entity :: PersonDelete |  ENTITY_PERSON_DELETE
export const entityPersonDeleteRequest = ({payload, metadata}) => ({
  type: ENTITY_PERSON_DELETE_REQUEST,
  payload,
  metadata
})

export const entityPersonDeleteSuccess = ({payload, metadata}) => ({
  type: ENTITY_PERSON_DELETE_SUCCESS,
  payload,
  metadata
})

export const entityPersonDeleteFailure = ({payload, metadata}) => ({
  type: ENTITY_PERSON_DELETE_FAILURE,
  payload,
  metadata
})
  
// entity :: OrganizationAdd |  ENTITY_ORGANIZATION_ADD
export const entityOrganizationAddRequest = ({payload, metadata}) => ({
  type: ENTITY_ORGANIZATION_ADD_REQUEST,
  payload,
  metadata
})

export const entityOrganizationAddSuccess = ({payload, metadata}) => ({
  type: ENTITY_ORGANIZATION_ADD_SUCCESS,
  payload,
  metadata
})

export const entityOrganizationAddFailure = ({payload, metadata}) => ({
  type: ENTITY_ORGANIZATION_ADD_FAILURE,
  payload,
  metadata
})
  
// entity :: OrganizationEdit |  ENTITY_ORGANIZATION_EDIT
export const entityOrganizationEditRequest = ({payload, metadata}) => ({
  type: ENTITY_ORGANIZATION_EDIT_REQUEST,
  payload,
  metadata
})

export const entityOrganizationEditSuccess = ({payload, metadata}) => ({
  type: ENTITY_ORGANIZATION_EDIT_SUCCESS,
  payload,
  metadata
})

export const entityOrganizationEditFailure = ({payload, metadata}) => ({
  type: ENTITY_ORGANIZATION_EDIT_FAILURE,
  payload,
  metadata
})
  
// entity :: OrganizationDelete |  ENTITY_ORGANIZATION_DELETE
export const entityOrganizationDeleteRequest = ({payload, metadata}) => ({
  type: ENTITY_ORGANIZATION_DELETE_REQUEST,
  payload,
  metadata
})

export const entityOrganizationDeleteSuccess = ({payload, metadata}) => ({
  type: ENTITY_ORGANIZATION_DELETE_SUCCESS,
  payload,
  metadata
})

export const entityOrganizationDeleteFailure = ({payload, metadata}) => ({
  type: ENTITY_ORGANIZATION_DELETE_FAILURE,
  payload,
  metadata
})
  
// entity :: ProjectAdd |  ENTITY_PROJECT_ADD
export const entityProjectAddRequest = ({payload, metadata}) => ({
  type: ENTITY_PROJECT_ADD_REQUEST,
  payload,
  metadata
})

export const entityProjectAddSuccess = ({payload, metadata}) => ({
  type: ENTITY_PROJECT_ADD_SUCCESS,
  payload,
  metadata
})

export const entityProjectAddFailure = ({payload, metadata}) => ({
  type: ENTITY_PROJECT_ADD_FAILURE,
  payload,
  metadata
})
  
// entity :: ProjectEdit |  ENTITY_PROJECT_EDIT
export const entityProjectEditRequest = ({payload, metadata}) => ({
  type: ENTITY_PROJECT_EDIT_REQUEST,
  payload,
  metadata
})

export const entityProjectEditSuccess = ({payload, metadata}) => ({
  type: ENTITY_PROJECT_EDIT_SUCCESS,
  payload,
  metadata
})

export const entityProjectEditFailure = ({payload, metadata}) => ({
  type: ENTITY_PROJECT_EDIT_FAILURE,
  payload,
  metadata
})
  
// entity :: ProjectDelete |  ENTITY_PROJECT_DELETE
export const entityProjectDeleteRequest = ({payload, metadata}) => ({
  type: ENTITY_PROJECT_DELETE_REQUEST,
  payload,
  metadata
})

export const entityProjectDeleteSuccess = ({payload, metadata}) => ({
  type: ENTITY_PROJECT_DELETE_SUCCESS,
  payload,
  metadata
})

export const entityProjectDeleteFailure = ({payload, metadata}) => ({
  type: ENTITY_PROJECT_DELETE_FAILURE,
  payload,
  metadata
})
  
// entity :: TaskAdd |  ENTITY_TASK_ADD
export const entityTaskAddRequest = ({payload, metadata}) => ({
  type: ENTITY_TASK_ADD_REQUEST,
  payload,
  metadata
})

export const entityTaskAddSuccess = ({payload, metadata}) => ({
  type: ENTITY_TASK_ADD_SUCCESS,
  payload,
  metadata
})

export const entityTaskAddFailure = ({payload, metadata}) => ({
  type: ENTITY_TASK_ADD_FAILURE,
  payload,
  metadata
})
  
// entity :: TaskEdit |  ENTITY_TASK_EDIT
export const entityTaskEditRequest = ({payload, metadata}) => ({
  type: ENTITY_TASK_EDIT_REQUEST,
  payload,
  metadata
})

export const entityTaskEditSuccess = ({payload, metadata}) => ({
  type: ENTITY_TASK_EDIT_SUCCESS,
  payload,
  metadata
})

export const entityTaskEditFailure = ({payload, metadata}) => ({
  type: ENTITY_TASK_EDIT_FAILURE,
  payload,
  metadata
})
  
// entity :: TaskDelete |  ENTITY_TASK_DELETE
export const entityTaskDeleteRequest = ({payload, metadata}) => ({
  type: ENTITY_TASK_DELETE_REQUEST,
  payload,
  metadata
})

export const entityTaskDeleteSuccess = ({payload, metadata}) => ({
  type: ENTITY_TASK_DELETE_SUCCESS,
  payload,
  metadata
})

export const entityTaskDeleteFailure = ({payload, metadata}) => ({
  type: ENTITY_TASK_DELETE_FAILURE,
  payload,
  metadata
})
  
// entity :: ResourceAdd |  ENTITY_RESOURCE_ADD
export const entityResourceAddRequest = ({payload, metadata}) => ({
  type: ENTITY_RESOURCE_ADD_REQUEST,
  payload,
  metadata
})

export const entityResourceAddSuccess = ({payload, metadata}) => ({
  type: ENTITY_RESOURCE_ADD_SUCCESS,
  payload,
  metadata
})

export const entityResourceAddFailure = ({payload, metadata}) => ({
  type: ENTITY_RESOURCE_ADD_FAILURE,
  payload,
  metadata
})
  
// entity :: ResourceEdit |  ENTITY_RESOURCE_EDIT
export const entityResourceEditRequest = ({payload, metadata}) => ({
  type: ENTITY_RESOURCE_EDIT_REQUEST,
  payload,
  metadata
})

export const entityResourceEditSuccess = ({payload, metadata}) => ({
  type: ENTITY_RESOURCE_EDIT_SUCCESS,
  payload,
  metadata
})

export const entityResourceEditFailure = ({payload, metadata}) => ({
  type: ENTITY_RESOURCE_EDIT_FAILURE,
  payload,
  metadata
})
  
// entity :: ResourceDelete |  ENTITY_RESOURCE_DELETE
export const entityResourceDeleteRequest = ({payload, metadata}) => ({
  type: ENTITY_RESOURCE_DELETE_REQUEST,
  payload,
  metadata
})

export const entityResourceDeleteSuccess = ({payload, metadata}) => ({
  type: ENTITY_RESOURCE_DELETE_SUCCESS,
  payload,
  metadata
})

export const entityResourceDeleteFailure = ({payload, metadata}) => ({
  type: ENTITY_RESOURCE_DELETE_FAILURE,
  payload,
  metadata
})


// entity :: BannerAdd |  ENTITY_BANNER_ADD
export const entityBannerAddRequest = ({payload, metadata}) => ({
  type: ENTITY_BANNER_ADD_REQUEST,
  payload,
  metadata
})

export const entityBannerAddSuccess = ({payload, metadata}) => ({
  type: ENTITY_BANNER_ADD_SUCCESS,
  payload,
  metadata
})

export const entityBannerAddFailure = ({payload, metadata}) => ({
  type: ENTITY_BANNER_ADD_FAILURE,
  payload,
  metadata
})
  