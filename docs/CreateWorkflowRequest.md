# SigniFlowConnect.CreateWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalDataField** | **String** | Sets additional data to be embedded in PDF Meta. | 
**autoExpireField** | [**AutoExpire**](AutoExpire.md) |  | 
**autoRemindField** | [**AutoRemind**](AutoRemind.md) |  | 
**docField** | **String** | Base64 Encoded String of document | 
**docNameField** | **String** | Name of document to display in SigniFlow | 
**dueDateField** | **Date** | Due date for the document, use in conjunction with Auto Expire. | [optional] 
**extensionField** | [**DocExtension**](DocExtension.md) |  | 
**messageField** | **String** | Custom message to display to participants | 
**priorityField** | [**Priority**](Priority.md) |  | 
**sLAField** | **Number** | Deprecated field, Pass 0 | [default to 0]
**tokenField** | [**TokenField**](TokenField.md) |  | 


