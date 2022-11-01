import json
import boto3
from botocore.exceptions import *


"""
Available variables in the lambda function
    ENV
    REGION
"""


def get_presigned_url(bucket_name, object_key):
    s3_client = boto3.client('s3')

    try:
        response = s3_client.generate_presigned_url(
            'put_object',
            Params={
                'Bucket': bucket_name,
                'Key': object_key
            },
            ExpiresIn=3600
        )

        return json.dumps(response)
    except ClientError as e:
        logging.error(e)
        return json.dumps(response)
    pass


def handler(event, context):
    print(event)
    bucket_name = event["bucket_name"]
    object_key = event["object_key"]

    return get_presigned_url(bucket_name, object_key)
