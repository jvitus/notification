from pyramid.security import NO_PERMISSION_REQUIRED
from pyramid.view import view_config
from ..Models import DBSession,Base
from pyramid.response import Response
from sqlalchemy import select,text,bindparam
import json

@view_config(route_name='details',renderer='json',permission=NO_PERMISSION_REQUIRED )
def getLogs(request):

	print(request.params.mixed())
	id_ = request.matchdict['id']

	params = request.params.mixed()
	logTable = Base.metadata.tables['Ocurrence_Alerte']

	query = text('SELECT * FROM Ocurrence_Alerte where ID = :val').bindparams(bindparam('val',id_))

	results = DBSession.execute(query).fetchall()
	print(type(results))

	data = [dict(row) for row in results]
	return data

