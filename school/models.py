from django.db import models

class School(models.Model):
    name = models.CharField(max_length=30)
    addr = models.CharField(max_length=120)

    def __unicode__(self):
        return self.name
    
    def getDataDict(self):
        return {
            'name': self.name,
            'addr': self.addr,
        }

class Department(models.Model):
    name = models.CharField(max_length=30)
    addr = models.CharField(max_length=120)
    school = models.ForeignKey(School)

    def __unicode__(self):
        return self.name

    def getDataDict(self):
        return {
            'name': self.name,
            'addr': self.addr,
            'school': self.school.getDataDict()
        }

class Speciality(models.Model):
    name = models.CharField(max_length=30)
    department = models.ForeignKey(Department)

    def __unicode__(self):
        return self.name
    
    def getDataDict(self):
        return {
            'name': self.name,
            'department': self.department.getDataDict()
        }
    
class Class(models.Model):
    name = models.CharField(max_length=30)
    speciality = models.ForeignKey(Speciality)

    def __unicode__(self):
        return self.name

    def getDataDict(self):
        return {
            'name': self.name,
            'speciality': self.speciality.getDataDict()
        }
