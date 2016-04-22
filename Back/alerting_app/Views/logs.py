
from pyramid.security import NO_PERMISSION_REQUIRED
from pyramid.view import view_config
from ..Models import DBSession,Base
from pyramid.response import Response
from sqlalchemy import select,text,bindparam
import json

@view_config(route_name='log/info',renderer='json',permission=NO_PERMISSION_REQUIRED )
def getLogs(request):

	print(request.params.mixed())
	params = request.params.mixed()
	logTable = Base.metadata.tables['TLOG_MESSAGES']

	query = text('SELECT * FROM TLOG_MESSAGES ')
	# ID > :val'
	#	).bindparams(bindparam('val',5))
	# query = select([logTable.c['SCOPE'],logTable.c['ORIGIN']]
	# 	).group_by(logTable.c['SCOPE'],logTable.c['ORIGIN'])

	# query = select(logTable.c)

	# for key in params:
	# 	query = query.where(logTable.c[key] == params[key] )


	results = DBSession.execute(query).fetchall()
	print(type(results))

	data = [dict(row) for row in results]
	return data

