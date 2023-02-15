FROM public.ecr.aws/lambda/python:3.9

ADD . ${LAMBDA_TASK_ROOT}
WORKDIR ${LAMBDA_TASK_ROOT}

RUN pip install --upgrade pip
RUN yum -y install git \
    yum -y install gcc 

RUN yum -y install gcc-c++ \
    yum -y install pkgconfig
    

RUN pip install -r requirements.txt --target "${LAMBDA_TASK_ROOT}/apps"

